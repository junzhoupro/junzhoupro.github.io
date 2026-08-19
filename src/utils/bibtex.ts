export interface Author {
  first: string;
  last: string;
}

export interface BibEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
  authors: Author[];
}

export function parseBibTeX(input: string): BibEntry[] {
  const entries: BibEntry[] = [];
  const rawEntries = input.split(/@(\w+)\s*\{/g).slice(1);

  for (let i = 0; i < rawEntries.length; i += 2) {
    const type = rawEntries[i].trim().toLowerCase();
    const body = rawEntries[i + 1];
    if (!body) continue;

    const keyMatch = body.match(/^\s*([^,]+),/);
    const key = keyMatch ? keyMatch[1].trim() : 'unknown';

    const fields: Record<string, string> = { title: 'Untitled', year: '0000' };
    const fieldRegex = /(\w+)\s*=\s*(?:\{((?:[^{}]|{[^{}]*})*)\}|"((?:[^"]|\\")*)"|(\d+))/g;

    let match;
    while ((match = fieldRegex.exec(body)) !== null) {
      const fieldKey = match[1].toLowerCase();
      const val = match[2] || match[3] || match[4] || '';
      fields[fieldKey] = val.replace(/\s+/g, ' ').trim();
    }

    let authors: Author[] = [];
    if (fields.author) {
      authors = fields.author.split(/\s+and\s+/i).map((str) => {
        const parts = str.split(',');
        if (parts.length > 1) {
          return { first: parts[1].trim(), last: parts[0].trim() };
        }
        const names = str.trim().split(' ');
        const last = names.pop() || '';
        const first = names.join(' ');
        return { first, last };
      });
    }

    entries.push({ type, key, fields, authors });
  }

  return entries;
}

export function formatAuthor(auth: Author) {
  return auth.first ? `${auth.first} ${auth.last}` : auth.last;
}

export function cleanTex(value: string) {
  return value
    .replace(/[{}]/g, '')
    .replace(/\\v\{r\}/g, 'ř')
    .replace(/\\'\{i\}/g, 'í')
    .replace(/\\'{\\i}/g, 'í')
    .replace(/\\'i/g, 'í')
    .replace(/\\i/g, 'ı');
}

export function venueLabel(entry: BibEntry) {
  const { fields } = entry;
  const venue = fields.journal || fields.booktitle || fields.publisher || fields.school || 'Preprint';
  const extras = [fields.volume && `Volume ${fields.volume}`, fields.number && `Issue ${fields.number}`, fields.pages, fields.year]
    .filter(Boolean)
    .join(', ');
  return extras ? `${cleanTex(venue)}, ${extras}` : cleanTex(venue);
}

export function isJournal(entry: BibEntry) {
  if (entry.fields.tags?.toLowerCase().includes('journal')) return true;
  return entry.type === 'article';
}

export function isConference(entry: BibEntry) {
  if (entry.fields.tags?.toLowerCase().includes('conference')) return true;
  if (entry.fields.presented) return true;
  return entry.type === 'inproceedings' || entry.type === 'conference';
}

export function sortByYear(entries: BibEntry[]) {
  return [...entries].sort((a, b) => (parseInt(b.fields.year) || 0) - (parseInt(a.fields.year) || 0));
}
