// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let filterMetadata = metadata.filter(meta => meta.id === +sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(filterMetadata).forEach(([key, value]) => {
    panel.append("h6").text(`${key}: ${value}`);
    });

  });
}

// Function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let filterSamples = samples.filter(s => s.id === sample)[0];

    // Get the otu_ids, otu_labels, and sample_values
    otuIDs = filterSamples.otu_ids;
    otuLabels = filterSamples.otu_labels;
    sampleValues = filterSamples.sample_values;

    // Build a Bubble Chart
    let bubbleChart = [{
      x: otuIDs,
      y: sampleValues,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIDs
      },
      text: otuLabels
    }];

    let bubbleLayout = {
      title: 'Bacteria Cultures per Sample',
      xaxis: {title: 'OTU ID'},
      yaxis: {title: 'Number of Bacteria'}
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbleChart, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let mappedData = otuIDs.map((id, index) => ({
      otu_id: id,
      otu_label: otuLabels[index],
      sample_value: sampleValues[index]
    }));

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    mappedData.sort((a, b) => b.sample_value - a.sample_value);
    let top10Samples = mappedData.slice(0, 10);
    top10Samples.reverse();
   
    let x = top10Samples.map(data => data.sample_value);
    let y = top10Samples.map(data => `OTU ${data.otu_id}`);
    let text = top10Samples.map(data => data.otu_label);

    let barChart = [{
      type: 'bar',
      x: x,
      y: y,
      text: text,
      orientation: 'h'
    }];
    
    let barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: {title: 'Number of Bacteria'}
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', barChart, barLayout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let panel = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(name => {
      panel.append("option")
        .text(name)
        .attr("value", name);
    });

    // Get the first sample from the list
    let initialSample = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(initialSample);
    buildMetadata(initialSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
