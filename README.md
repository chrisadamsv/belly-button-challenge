# belly-button-challenge

## Instructions
### Complete the following steps:

1. Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    - Use sample_values as the values for the bar chart.
    - Use otu_ids as the labels for the bar chart.
    - Use otu_labels as the hovertext for the chart.
<img width="957" alt="Screenshot 2025-02-09 at 16 29 42" src="https://github.com/user-attachments/assets/034f66fe-7343-4c45-8481-6dcf085b1501" />
<br><br>
3. Create a bubble chart that displays each sample.
    - Use otu_ids for the x values.
    - Use sample_values for the y values.
    - Use sample_values for the marker size.
    - Use otu_ids for the marker colors.
    - Use otu_labels for the text values.
<img width="1287" alt="Screenshot 2025-02-09 at 16 29 50" src="https://github.com/user-attachments/assets/ff410b0e-6995-4f9c-99bb-faf0a101a56d" />
<br><br>
4. Display the sample's metadata, i.e., an individual's demographic information.
    - Loop through each key-value pair from the metadata JSON object and create a text string.
    - Append an html tag with that text to the #sample-metadata panel.
<br>
<img width="345" alt="Screenshot 2025-02-09 at 16 32 09" src="https://github.com/user-attachments/assets/a8a5be15-dfe4-423f-8285-508a365d6e65" />
<br><br>
5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:
<br>
<img width="1513" alt="Screenshot 2025-02-09 at 16 29 51" src="https://github.com/user-attachments/assets/566298a8-2cab-48b4-9c73-4ce0136e1373" />
<br><br>
6. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
