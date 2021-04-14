export function randomId(prefix = 'gen'): string {
  return '_' + prefix + Math.random().toString(36).substr(2, 9);
}
