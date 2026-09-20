#!/usr/bin/env node
import { Command } from 'commander';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const program = new Command();
program.name('leansdd').description('Lean-SDD protocol CLI').version('0.2.0');

const root = (project: string) => path.resolve(project, 'leansdd');

program.command('init')
  .argument('[project]', 'project directory', '.')
  .action(async (project) => {
    const base = root(project);
    for (const dir of ['specs', 'experiments', 'evidence']) await mkdir(path.join(base, dir), { recursive: true });
    const constitution = path.join(base, 'constitution.md');
    try { await readFile(constitution, 'utf8'); }
    catch { await writeFile(constitution, '# Lean-SDD Constitution\n\nDescribe product and architecture constraints here.\n'); }
    console.log(`Initialized Lean-SDD at ${base}`);
  });

program.command('new')
  .argument('[project]', 'project directory', '.')
  .argument('<title>', 'spec title')
  .action(async (project, title) => {
    const specs = path.join(root(project), 'specs');
    await mkdir(specs, { recursive: true });
    const files = (await readdir(specs)).filter(f => /^SPEC-\d+/.test(f));
    const next = Math.max(0, ...files.map(f => Number(f.match(/^SPEC-(\d+)/)?.[1] ?? 0))) + 1;
    const id = `SPEC-${String(next).padStart(3, '0')}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const body = `---\nid: ${id}\ntitle: ${title}\nstatus: draft\nslice: SLICE-${String(next).padStart(3, '0')}\n---\n\n## Intent\n\n## Outcome\n\n## Behaviour\n\n## Constraints\n\n## Slice\n### Included\n\n### Deferred\n\n## Evidence\n### Verification\n\n### Production\n\n## Open Questions\n`;
    const file = path.join(specs, `${id}-${slug}.md`);
    await writeFile(file, body);
    console.log(file);
  });

program.command('status')
  .argument('[project]', 'project directory', '.')
  .action(async (project) => {
    const specs = path.join(root(project), 'specs');
    let files: string[] = [];
    try { files = (await readdir(specs)).filter(f => f.endsWith('.md')); } catch {}
    if (!files.length) return console.log('No specs found.');
    for (const file of files.sort()) {
      const text = await readFile(path.join(specs, file), 'utf8');
      const id = text.match(/^id:\s*(.+)$/m)?.[1] ?? file;
      const status = text.match(/^status:\s*(.+)$/m)?.[1] ?? 'unknown';
      const title = text.match(/^title:\s*(.+)$/m)?.[1] ?? '';
      console.log(`${id}\t${status}\t${title}`);
    }
  });

program.command('verify')
  .argument('[project]', 'project directory', '.')
  .action(async (project) => {
    const specs = path.join(root(project), 'specs');
    let files: string[] = [];
    try { files = (await readdir(specs)).filter(f => f.endsWith('.md')); } catch {}
    let failures = 0;
    const required = ['## Intent', '## Outcome', '## Behaviour', '## Constraints', '## Slice', '## Evidence', '## Open Questions'];
    for (const file of files) {
      const text = await readFile(path.join(specs, file), 'utf8');
      const missing = required.filter(h => !text.includes(h));
      if (missing.length) { failures++; console.log(`FAIL ${file}: missing ${missing.join(', ')}`); }
      else console.log(`PASS ${file}`);
    }
    if (!files.length) { console.log('No specs found.'); process.exitCode = 1; }
    else if (failures) process.exitCode = 1;
  });

await program.parseAsync();
