import type { Linter } from "eslint";

export interface ConfigWithExtends extends Linter.Config {
  extends?: readonly Linter.Config[] | undefined;
}

export function expand(configs: readonly ConfigWithExtends[]): Linter.Config[] {
  return configs.flatMap(({ extends: extendConfigs, ...config }) => {
    const files = config.files;
    const ignores = config.ignores;
    return [
      ...(extendConfigs ?
        extendConfigs.map((config) => ({
          ...config,
          ...(files !== undefined ? { files } : {}),
          ...(ignores !== undefined ? { ignores } : {}),
        }))
      : []),
      config,
    ];
  });
}
