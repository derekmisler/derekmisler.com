export function hourTheme(hour: number) {
  if (hour >= 5 && hour < 9) return 'dawn';
  if (hour >= 9 && hour < 16) return 'midday';
  if (hour >= 16 && hour < 20) return 'dusk';
  return 'night';
}
