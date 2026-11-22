export function hourTheme(hour: number) {
  if (hour >= 5 && hour < 8) return 'dawn';
  if (hour >= 8 && hour < 17) return 'midday';
  if (hour >= 17 && hour < 20) return 'dusk';
  return 'night';
}
