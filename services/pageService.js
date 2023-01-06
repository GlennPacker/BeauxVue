
exports.mapSchema = (data, lookup, t) => {
  const schema = data[lookup];
  const name = t(`${lookup}.title`);
  const atNear = t(`${lookup}.atNear`);
  schema.cover.alt = t(`all.cover.alt`, { name, atNear });
  schema.cover.title = t(`${lookup}.cover.title`);
  schema.cover.para = t(`${lookup}.cover.para`);
  schema.description = t(`all.description`, { name, atNear });
  schema.pageTitle = t(`all.pageTitle`, { name, atNear });

  return schema;
}