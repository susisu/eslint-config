/**
 * Creates an array of configs with each element merged shallowly with the base config.
 * @param base The base config.
 * @param configs An array of configs.
 * @returns A new array of configs.
 */
export function map<B, C>(base: B, configs: readonly C[]): Array<B & C> {
  // eslint-disable-next-line @susisu/safe-typescript/no-unsafe-object-property-overwrite
  return configs.map((config) => ({ ...base, ...config }));
}
