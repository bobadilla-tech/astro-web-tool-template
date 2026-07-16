export type CaseType =
  | "upper"
  | "lower"
  | "title"
  | "camel"
  | "snake"
  | "kebab";

export interface ConvertOptions {
  text: string;
  caseType: CaseType;
}

function toWords(text: string): string[] {
  return text
    .trim()
    .split(/[\s_-]+|(?<=[a-z0-9])(?=[A-Z])/)
    .filter(Boolean)
    .map((word) => word.toLowerCase());
}

export function convertCase({ text, caseType }: ConvertOptions): string {
  switch (caseType) {
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "title":
      return toWords(text)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    case "camel": {
      const [first, ...rest] = toWords(text);
      if (!first) return "";
      return (
        first +
        rest
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("")
      );
    }
    case "snake":
      return toWords(text).join("_");
    case "kebab":
      return toWords(text).join("-");
    default:
      return text;
  }
}
