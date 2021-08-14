import render from "./render.js";
import withTotal from "./withTotal.js";
import prepareDatasetForGraph from "./prepareDatasetForGraph.js";

export default function generateGraph(data, options) {
    const { notNumbers } = options;
    const schema = Object.keys(data[0]).filter(key => !notNumbers.includes(key));
    const dataWithTotal = withTotal(schema, data);
    const datasets = prepareDatasetForGraph(schema, data, options);
    const labels = dataWithTotal.map(d => d.period);
    render('myChart', 
    {
        labels,
        datasets
      }, 
    options);
}