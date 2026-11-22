export function sunTheme(table: string, zone: string, offset: number, now: Date) {
  const slash = zone.indexOf('/');
  const area = table.split('|').find((group) => group.startsWith(`${zone.slice(0, slash)}:`)) ?? '';
  const entry = area.split(/[:;]/).find((item) => item.startsWith(`${zone.slice(slash + 1)},`));
  const [lat, lon] = entry ? entry.split(',').slice(1).map(Number) : [40, -offset / 4];
  const rad = Math.PI / 180;
  const day = Math.floor((now.getTime() - Date.UTC(now.getUTCFullYear(), 0, 0)) / 864e5);
  const b = (2 * Math.PI * (day - 81)) / 364;
  const noon = 720 - 4 * lon - (9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b));
  const declination = -23.44 * rad * Math.cos((2 * Math.PI * (day + 10)) / 365);
  const half = (altitude: number) =>
    (4 / rad) *
    Math.acos(
      Math.min(
        1,
        Math.max(
          -1,
          (Math.sin(altitude * rad) - Math.sin(lat * rad) * Math.sin(declination)) /
            (Math.cos(lat * rad) * Math.cos(declination)),
        ),
      ),
    );
  const minutes = ((((now.getUTCHours() * 60 + now.getUTCMinutes() - noon) % 1440) + 2160) % 1440) - 720;
  if (Math.abs(minutes) < half(-0.833) - 60) return 'midday';
  if (Math.abs(minutes) >= half(-6)) return 'night';
  return minutes < 0 ? 'dawn' : 'dusk';
}
