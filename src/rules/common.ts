export const levels = {
  off: "off",
  warn: "warn",
  error: "error",
} as const;

export const intLevels = {
  off: 0,
  warn: 1,
  error: 2,
} as const;

export type Level =
  | (typeof levels)[keyof typeof levels]
  | (typeof intLevels)[keyof typeof intLevels];

export type Rules = Readonly<{ [name: string]: Level | [Level, ...unknown[]] | undefined }>;

/**
 * Removes all disabled rules.
 */
export function removeDisabledRules(rules: Rules): Rules {
  return Object.fromEntries(
    [...Object.entries(rules)].filter(([, value]) => {
      const level = Array.isArray(value) ? value[0] : value;
      return !(level === levels.off || level === intLevels.off);
    }),
  );
}
