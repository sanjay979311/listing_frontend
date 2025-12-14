export const cleanSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};
