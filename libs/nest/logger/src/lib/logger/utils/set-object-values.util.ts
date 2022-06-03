export function setObjectValues<T>(object: T, values: T) {
  for (const key in values) {
    object[key] = values[key];
  }
}
