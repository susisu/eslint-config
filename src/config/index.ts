import { make as js } from "./js";
import { make as ts } from "./ts";
import { make as tsTypeChecked } from "./ts-type-checked";
import { make } from "./all";

export const config = { js, ts, tsTypeChecked };
export { make };
