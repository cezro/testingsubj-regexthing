export function match(pattern: string, str: string): boolean {
  const regexPattern = pattern
    .replace(/\*/g, '.*')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\|/g, '\\|');

  const regex = new RegExp(`^${regexPattern}$`, 'i');

  return regex.test(str);
}