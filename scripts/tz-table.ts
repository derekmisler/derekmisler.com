import { readFileSync, writeFileSync } from 'node:fs';

const dir = process.argv[2] ?? '/usr/share/zoneinfo';
const degrees = (value: string, width: number) =>
  Math.round(
    Number(value.slice(0, width + 1)) + (Number(`${value[0]}1`) * Number(value.slice(width + 1, width + 3))) / 60,
  );

const groups = new Map<string, Map<string, string>>();
for (const line of readFileSync(`${dir}/zone1970.tab`, 'utf8').split('\n')) {
  if (!line || line.startsWith('#')) continue;
  const [, position, zone] = line.split('\t');
  const [, lat, lon] = position.match(/^([+-]\d{4,6})([+-]\d{5,7})$/) ?? [];
  const slash = zone.indexOf('/');
  const group = groups.get(zone.slice(0, slash)) ?? new Map<string, string>();
  groups.set(zone.slice(0, slash), group);
  group.set(zone.slice(slash + 1), `${degrees(lat, 2)},${degrees(lon, 3)}`);
}

const table = [...groups]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(
    ([area, zones]) =>
      `${area}:${[...zones]
        .sort(([a], [b]) => a.localeCompare(b))
        .map((entry) => entry.join(','))
        .join(';')}`,
  )
  .join('|');
writeFileSync('src/kinetic/zones.ts', `export const zones = '${table}';\n`);
console.log(`${table.length} bytes`);
