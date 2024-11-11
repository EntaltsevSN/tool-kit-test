export function getStringFromNull(value: string | null) {
  return value === null ? '' : value;
}