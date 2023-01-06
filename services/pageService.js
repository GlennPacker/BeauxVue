
exports.mapSchema = (data, lookup, t) => {
  const schema = data[lookup];
  const name = t(`${lookup}.title`);
  const atNear = t(`${lookup}.atNear`);
  schema.header.alt = t(`all.header.alt`, { name, atNear });
  schema.header.title = t(`${lookup}.header.title`);
  schema.header.para = t(`${lookup}.header.para`);
  schema.description = t(`all.description`, { name, atNear });
  schema.pageTitle = t(`all.pageTitle`, { name, atNear });

  return schema;
}
