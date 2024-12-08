// Function to load items from the JSON file and display them in the item grid
async function loadItemsFromFile() {
    const itemGrid = document.getElementById('itemGrid');
    try {
        // Fetching the items.json file containing item details
        const response = await fetch('app/items.json');
        const items = await response.json();

        // Loop through each item and create a clickable div for each one
        items.forEach(item => {
            const iconPath = `app/items/${item.type}-${item.meta}.png`; // Path to item icon

            // Create a new div for each item with the icon as the background
            const div = document.createElement('div');
            div.className = 'item';
            div.style.backgroundImage = `url('${iconPath}')`; // Set the background image of the div
            div.title = item.name; // Set the title as the item name
            div.onclick = () => addItemToTextarea(item.text_type); // Add item to textarea on click
            itemGrid.appendChild(div); // Append the item div to the grid
        });
    } catch (error) {
        // Log an error and display a message if the items.json file fails to load
        console.error('Failed to load items:', error);
        itemGrid.innerHTML = '<p class="text-danger">Failed to load items. Please check your JSON file.</p>';
    }
}

// Function to add an item to the textarea
function addItemToTextarea(itemName) {
    const textarea = document.getElementById('items');
    textarea.value += `${itemName} 1\n`; // Append item name and quantity to the textarea
}

// Function to generate the kit YAML based on user input
function generateKit() {
    const kitName = document.getElementById('kitName').value.trim(); // Get the kit name
    const delay = document.getElementById('delay').value.trim(); // Get the cooldown time
    const items = document.getElementById('items').value.trim().split('\n') // Get the items and format them
        .map(item => `  - ${item}`).join('\n');
    
    // Build the YAML structure
    const yaml = `
${kitName}:
  delay: ${delay}
  items:
${items || ''} 
`.trim();

    // Output the generated YAML into the output textarea
    const output = document.getElementById('output');
    output.textContent = yaml;

    // Apply syntax highlighting to the YAML output using PrismJS
    Prism.highlightAll();
}

// Function to copy the generated YAML to the clipboard
function copyToClipboard() {
    const output = document.getElementById('output');
    const range = document.createRange();
    range.selectNode(output); // Select the output area
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range); // Add the range to the selection
    document.execCommand('copy'); // Copy the selected text to clipboard
    alert('Copied to clipboard!'); // Notify the user that the text has been copied
}

// Event listener that runs once the document is fully loaded
document.addEventListener('DOMContentLoaded', loadItemsFromFile);
