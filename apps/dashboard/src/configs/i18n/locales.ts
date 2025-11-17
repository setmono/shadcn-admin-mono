import enUS from "./resources/en/en-US.json";
import zhHansCN from "./resources/zh/zh-Hans-CN.json";

const resources = {
  "en-US": {
    translation: enUS,
  },
  "zh-Hans-CN": {
    translation: zhHansCN,
  },
} as const;

export default resources;
