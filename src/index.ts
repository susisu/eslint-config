import type { ConfigOptions } from "./config/index.js";
import { config } from "./config/index.js";
import type { ConfigWithExtends } from "./utils/index.js";
import { map } from "./utils/index.js";

export type { ConfigOptions, ConfigWithExtends };
export { config, map };
export default config;
