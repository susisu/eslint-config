import type { ESLint, Linter } from "eslint";
import type { ConfigWithExtendsArray } from "@eslint/config-helpers";
import { defineConfig } from "@eslint/config-helpers";

import tsEslintParser from "@typescript-eslint/parser";

import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import safeTsPlugin from "@susisu/eslint-plugin-safe-typescript";
import stylisticPlugin from "@stylistic/eslint-plugin";

import prettierConfig from "eslint-config-prettier";

import {
  js as jsRules,
  ts as tsRules,
  tsTypeChecked as tsTypeCheckedRules,
  stylistic as stylisticRules,
} from "./rules.js";

export type ConfigOptions = Readonly<
  Partial<{
    /** Enable recommended rules. (default: true) */
    recommendedRules: boolean | undefined;
    /** Default sourceType for .js files.  (default: "module") */
    jsSourceType: Linter.SourceType | undefined;
    /**
     * Set languageOptions.parserOptions.projectService for TypeScript files. (default: true)
     * If both `tsProjectService` and `tsProject` are enabled, only `tsProjectService` will have effect.
     */
    tsProjectService: tsEslintParser.ParserOptions["projectService"] | undefined;
    /**
     * Set languageOptions.parserOptions.project for TypeScript files. (default: false)
     * If both `tsProjectService` and `tsProject` are enabled, only `tsProjectService` will have effect.
     */
    tsProject: tsEslintParser.ParserOptions["project"] | undefined;
    /** Set languageOptions.parserOptions.tsconfigRootDir for TypeScript files. (default: undefined) */
    tsconfigRootDir: tsEslintParser.ParserOptions["tsconfigRootDir"] | undefined;
    /** If true, mixes eslint-config-prettier to disable formatting rules. (default: true) */
    prettier: boolean | undefined;
  }>
>;

export function config(
  options?: ConfigOptions,
  ...configs: ConfigWithExtendsArray
): Linter.Config[] {
  const recommendedRules = options?.recommendedRules ?? true;
  const jsSourceType = options?.jsSourceType ?? "module";
  const tsProjectService = options?.tsProjectService ?? true;
  const tsProject = options?.tsProject ?? false;
  const tsconfigRootDir = options?.tsconfigRootDir ?? undefined;
  const prettier = options?.prettier ?? true;

  return defineConfig(
    {
      name: "@susisu/eslint-config/linter-options",
      linterOptions: {
        reportUnusedDisableDirectives: "warn",
        reportUnusedInlineConfigs: "warn",
      },
    },
    {
      name: "@susisu/eslint-config/plugins",
      plugins: {
        // eslint-disable-next-line @susisu/safe-typescript/no-type-assertion
        "@typescript-eslint": tsEslintPlugin as unknown as ESLint.Plugin,
        "@susisu/safe-typescript": safeTsPlugin,
        // eslint-disable-next-line @susisu/safe-typescript/no-type-assertion
        "@stylistic": stylisticPlugin as ESLint.Plugin,
      },
    },
    {
      name: "@susisu/eslint-config/language-options/js",
      files: ["**/*.js"],
      languageOptions: {
        sourceType: jsSourceType,
      },
    },
    {
      name: "@susisu/eslint-config/language-options/cjs",
      files: ["**/*.cjs"],
      languageOptions: {
        sourceType: "commonjs",
      },
    },
    {
      name: "@susisu/eslint-config/language-options/mjs",
      files: ["**/*.mjs"],
      languageOptions: {
        sourceType: "module",
      },
    },
    {
      name: "@susisu/eslint-config/language-options/ts",
      files: ["**/*.{ts,tsx,cts,mts}"],
      languageOptions: {
        sourceType: "module",
        parser: tsEslintParser,
        parserOptions: {
          ...(tsProjectService ? { projectService: tsProjectService }
          : tsProject ? { project: tsProject }
          : {}),
          tsconfigRootDir,
        },
      },
    },
    recommendedRules ?
      [
        {
          name: "@susisu/eslint-config/rules/js",
          files: ["**/*.{js,cjs,mjs}"],
          rules: {
            ...jsRules,
            ...stylisticRules,
          },
        },
        {
          name: "@susisu/eslint-config/rules/ts",
          files: ["**/*.{ts,tsx,cts,mts}"],
          rules: {
            ...(tsProjectService || tsProject ? tsTypeCheckedRules : tsRules),
            ...stylisticRules,
          },
        },
      ]
    : [],
    // custom configs
    configs,
    // disable formatting rules
    prettier ?
      [
        {
          name: "@susisu/eslint-config/prettier",
          rules: prettierConfig.rules,
        },
      ]
    : [],
  );
}
