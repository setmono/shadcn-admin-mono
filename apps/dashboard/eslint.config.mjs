import pluginQuery from "@tanstack/eslint-plugin-query";

import { config } from "@mono/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export default [...pluginQuery.configs["flat/recommended"], ...config];
