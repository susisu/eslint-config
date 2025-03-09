import type { ConfigOptions } from "./config/index.js";
import { config } from "./config/index.js";
import type { ConfigWithExtends } from "./utils/index.js";
import { map } from "./utils/index.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
import * as __internal__rules from "./rules/index.js";

export type { ConfigOptions, ConfigWithExtends };
export { config, map, __internal__rules };
export default config;
