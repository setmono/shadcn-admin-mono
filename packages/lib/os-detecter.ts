export type OSName =
  | "Windows"
  | "macOS"
  | "Linux"
  | "Android"
  | "iOS"
  | "Unknown";

export function osDetecter(): OSName {
  const { userAgent, platform } = window.navigator;
  const platformLower = platform.toLowerCase();
  const ua = userAgent.toLowerCase();

  if (/win/.test(platformLower)) return "Windows";
  if (/mac/.test(platformLower)) return "macOS";
  if (/linux/.test(platformLower)) return "Linux";
  if (/android/.test(ua)) return "Android";
  if (/iphone|ipad|ipod/.test(ua)) return "iOS";

  return "Unknown";
}

export interface ModifierMap {
  primary: string;
  shift: string;
  alt: string;
  option?: string;
}

export function getModifierKeys(os?: OSName): ModifierMap {
  const currentOS = os ?? osDetecter();

  if (currentOS === "macOS") {
    return {
      primary: "⌘",
      shift: "⇧",
      alt: "⌥",
    };
  }

  return {
    primary: "Ctrl",
    shift: "Shift",
    alt: "Alt",
  };
}

export function formatShortcut(...keys: (string | OSName)[]): string {
  let os: OSName | undefined;
  const last = keys[keys.length - 1];

  if (
    last === "Windows" ||
    last === "macOS" ||
    last === "Linux" ||
    last === "Android" ||
    last === "iOS" ||
    last === "Unknown"
  ) {
    os = last as OSName;
    keys = keys.slice(0, -1);
  }

  const mod = getModifierKeys(os);

  return keys
    .map((k) => {
      switch (k.toLowerCase()) {
        case "cmd":
        case "command":
        case "meta":
          return mod.primary;
        case "shift":
          return mod.shift;
        case "alt":
        case "option":
          return mod.alt;
        default:
          return k.toUpperCase();
      }
    })
    .join(os === "macOS" ? "" : "+");
}
