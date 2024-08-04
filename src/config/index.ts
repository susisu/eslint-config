import type { ESLint, Linter } from "eslint";

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
} from "../rules";

import { config as jsConfig } from "./js";
import { config as tsConfig } from "./ts";
import { config as tsTypeCheckedConfig } from "./ts-type-checked";

export type ConfigOptions = Readonly<
  Partial<{
    /** Default sourceType for .js files.  (default: "module") */
    jsSourceType: "script" | "module" | "commonjs" | undefined;
    /**
     * Set languageOptions.parserOptions.projectService for TypeScript files. (default: true)
     */
    tsProjectService: tsEslintParser.ParserOptions["projectService"] | undefined;
    /**
     * Set languageOptions.parserOptions.project for TypeScript files. (default: false)
     * @deprecated Use tsProjectService instead.
     */
    tsProject: tsEslintParser.ParserOptions["project"] | undefined;
    /** If true, mixes eslint-config-prettier to disable formatting rules. (default: true) */
    prettier: boolean | undefined;
  }>
>;

export function config(
  options?: ConfigOptions,
  configs?: readonly Linter.Config[],
): Linter.Config[] {
  const jsSourceType = options?.jsSourceType ?? "module";
  const tsProjectService = options?.tsProjectService ?? true;
  const tsProject = options?.tsProject ?? false;
  const prettier = options?.prettier ?? true;

  return [
    // linter settings
    {
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      plugins: {
        // eslint-disable-next-line @susisu/safe-typescript/no-type-assertion
        "@typescript-eslint": tsEslintPlugin as unknown as ESLint.Plugin,
        "@susisu/safe-typescript": safeTsPlugin,
        "@stylistic": stylisticPlugin,
      },
    },
    // language settings
    {
      files: ["**/*.js"],
      languageOptions: {
        sourceType: jsSourceType,
      },
    },
    {
      files: ["**/*.cjs"],
      languageOptions: {
        sourceType: "commonjs",
      },
    },
    {
      files: ["**/*.mjs", "**/*.{ts,tsx,cts,ctsx,mts,mtsx}"],
      languageOptions: {
        sourceType: "module",
      },
    },
    {
      files: ["**/*.{ts,tsx,cts,ctsx,mts,mtsx}"],
      languageOptions: {
        parser: tsEslintParser,
        parserOptions: {
          ...(tsProjectService ? { projectService: tsProjectService }
          : tsProject ? { project: tsProject }
          : {}),
        },
      },
    },
    // rules
    {
      files: ["**/*.{js,cjs,mjs}"],
      rules: {
        ...jsRules,
        ...stylisticRules,
      },
    },
    {
      files: ["**/*.{ts,tsx,cts,ctsx,mts,mtsx}"],
      rules: {
        ...(tsProjectService || tsProject ? tsTypeCheckedRules : tsRules),
        ...stylisticRules,
      },
    },
    // custom configs
    ...(configs ?? []),
    // disable formatting rules
    ...(prettier ? [{ rules: prettierConfig.rules }] : []),
  ];
}

config.js = jsConfig;
config.ts = tsConfig;
config.tsTypeChecked = tsTypeCheckedConfig;
