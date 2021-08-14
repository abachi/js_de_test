
export default function prepareDatasetForGraph(schema, data, options) {
    const { backgroundColor, borderColor } = options;
    return schema
                .map(key => ({
                    label: key, 
                    data: valuesByKey(data, key),
                    backgroundColor,
                    borderColor, 
                }));
}

function valuesByKey(data, key){
    return data.map( i => i[key])
}