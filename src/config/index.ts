import type { FlatESLintConfig } from "eslint-define-config";
import { defineFlatConfig } from "eslint-define-config";

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
    /** Default sourceType for .js files  (default: "module") */
    sourceType: "script" | "module" | "commonjs";
    /** Set as languageOptions.parserOptions.project for TypeScript files (default: true) */
    tsProject: boolean | string | string[];
    /** If true, mixes eslint-config-prettier to disable formatting rules (default: true) */
    prettier: boolean;
  }>
>;

export function config(options?: ConfigOptions, configs?: FlatESLintConfig[]): FlatESLintConfig[] {
  const sourceType = options?.sourceType ?? "module";
  const tsProject = options?.tsProject ?? true;
  const prettier = options?.prettier ?? true;

  return defineFlatConfig([
    // linter settings
    {
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      plugins: {
        "@typescript-eslint": tsEslintPlugin,
        "@susisu/safe-typescript": safeTsPlugin,
        "@stylistic": stylisticPlugin,
      },
    },
    // language settings
    {
      files: ["**/*.js"],
      languageOptions: {
        sourceType,
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
          ...(tsProject ? { project: tsProject } : {}),
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
        ...(tsProject ? tsTypeCheckedRules : tsRules),
        ...stylisticRules,
      },
    },
    // custom configs
    ...(configs ?? []),
    // disable formatting rules
    ...(prettier ? [{ rules: prettierConfig.rules }] : []),
  ]);
}

config.js = jsConfig;
config.ts = tsConfig;
config.tsTypeChecked = tsTypeCheckedConfig;
