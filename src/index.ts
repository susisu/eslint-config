import type { ConfigOptions } from "./config";
import { config } from "./config";
import type { ConfigWithExtends } from "./utils";
import { map } from "./utils";

// eslint-disable-next-line @typescript-eslint/naming-convention
import * as __internal__rules from "./rules";

export type { ConfigOptions, ConfigWithExtends };
export { config, map, __internal__rules };
export default config;
