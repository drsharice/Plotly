d3.json("static/js/samples.json").then((data) => {
    

// Initializes the page with a default plot
function init() {
    data = [{
        x: data.samples[0].sample_values.slice(0, 10).reverse(),
        y: data.samples[0].otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),

        Plotly.newPlot("plot", data);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    // Initialize x and y arrays
    var x = [];
    var y = [];

    if (dataset === 'dataset1') {
        x: data.samples[0].sample_values.slice(0, 10).reverse(),
        y: data.samples[0].otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),

    }

    else if (dataset === 'dataset2') {
        x: data.samples[0].sample_values.slice(0, 10).reverse(),
        y: data.samples[0].otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),

    }

    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
}

init();
