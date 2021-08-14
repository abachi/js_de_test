

export default function withTotal(schema, data) {
  return data.map(item => {
    let total = 0;
    schema.forEach(key => {
      total += item[key];
    });
    item.total = total / schema.length;
    return item;
  });
}