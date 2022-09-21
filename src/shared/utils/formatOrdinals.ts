const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

export default (suffixes: Map<string, string>, number: number) => {
  const rule = pr.select(number);

  return suffixes.get(rule);
};
