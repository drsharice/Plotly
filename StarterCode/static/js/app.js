d3.json("static/js/samples.json").then((data) => {
    //  Create the Traces
    console.log(data.samples[0].sample_values)
    var trace1 = {
        x: data.samples[0].sample_values.slice(0, 10).reverse(),
        y: data.samples[0].otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
        text: data.samples[0].otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
    };

    var trace2 = {
        x: data.samples[0].sample_values.slice(0, 10).reverse(),
        y: data.samples[0].otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
        value: 0 - 9,
        title: { text: "Belly Button Washing Frequency Scrubs per Week" },
        type: "indicator",
        mode: "gauge+number+delta",
        delta: { reference: 5 },
        gauge: {

            axis: { range: [null, 9] },
            steps: [
                { range: [0, 4 - 5], color: "lightgray" },
                { range: [5 - 0, 9 - 0], color: "gray" }
            ],
            threshold: {
                line: { color: "red", width: 4 },
                thickness: 0.75,
                value: 5
            }
        }
    };
    
    var trace3 = {
        x: data.samples[0].sample_values.slice(0, 10).reverse(),
        y: data.samples[0].otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
        marker: {
            color: ['red', 'blue'],
            size: [20, 50, 80]
        },
        mode: 'markers'

    };

    // Create the data array for the plot
    var data1 = [trace1];
    var data2 = [trace2];
    var data3 = [trace3];
	//console.log(data);
	//console.log(data1);

    // Define the plot layout
    var layout = {
        title: "Square Root of Cancer Survival by Organ",
        xaxis: { title: "Organ" },
        yaxis: { title: "Square Root of Survival" }
    };
    var layout2 = {
        title: "Scrubs per week",
        width: 600,
        height: 500,
        margin: {t:0, b: 0}
    };
    var layout3 = {
        xaxis: { title: "OTU ID" },
    };

    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data1);
    Plotly.newPlot("gauge", data2, layout2);
    Plotly.newPlot("bubble", data3, layout3);
});
