# EssentialsX Kit Generator

## Overview
The **EssentialsX Kit Generator** is a web-based tool designed to help Minecraft server administrators create kits for EssentialsX by generating easy-to-use YAML configurations. It allows users to customize kit names, cooldowns, and items, which can be easily copied and pasted into their server's `kits.yml` file. The user-friendly interface includes an item grid for quickly selecting items and an output section that displays the generated YAML for easy copying.

**Check on GitHub** - https://bttqjs.github.io/essentialsx-kit-generator/

## Features
- **Easy-to-use interface:** A simple form for creating kits with fields for the kit name, cooldown time, and items.
- **Item selection grid:** A visually appealing item grid where users can click to select items and automatically add them to the kit.
- **YAML output:** Generates a clean YAML format for easy integration into your EssentialsX configuration.
- **Copy to Clipboard:** Instantly copy the generated YAML to your clipboard with the click of a button.
- **Customizable:** The generator allows server admins to easily adjust the kits according to their server's needs.

## Getting Started

### Prerequisites
- A web browser with support for HTML5 and JavaScript.
- A server running EssentialsX, where you will paste the generated kit configurations into the `kits.yml` file.

### Installation
1. Download or clone the project.
2. Ensure the following files and directories are present in your project:
   - `index.html` (the main HTML file for the generator)
   - `app/items.json` (the JSON file containing the items with their details)
   - `app/items/` (folder containing item icons, each named with the format `type-meta.png` for example `0-0.png`)
   - `app/kits.js` (JavaScript file handling the functionality)
   - `app/essentialskits.css` (custom CSS for styling the generator)
3. Open `index.html` in your web browser to start using the EssentialsX Kit Generator.

### Example Item JSON Format
Here is an example of how items are structured in the `items.json` file:

```json
[
    { "type": 2265, "meta": 0, "name": "Ward Disc", "text_type": "record_ward" },
    { "type": 2266, "meta": 0, "name": "11 Disc", "text_type": "record_11" },
    { "type": 2267, "meta": 0, "name": "Wait Disc", "text_type": "record_wait" }
]
```

Each item includes:
- `type`: The item's unique identifier.
- `meta`: The item's metadata (usually 0 for non-damageable items).
- `name`: The item's display name.
- `text_type`: The text type that corresponds to the item used in EssentialsX kits.

### Icons
Icons for each item should be placed in the `items/` folder and named according to their type and meta value. For example, for an item with type `2265` and meta `0`, the icon file should be named `2265-0.png`. Icons should be in the `.png` format with dimensions of `32x32px`.

## Usage
1. **Enter Kit Details:**
   - Provide a name for the kit in the "Kit Name" field.
   - Set a cooldown (in seconds) for how often players can use the kit.
   - Select items by clicking on them in the item grid to add them to the kit.
2. **Generate YAML:**
   - After filling in the form and selecting items, click the "Generate Kit" button.
   - The generated YAML configuration will be displayed in the output section.
3. **Copy YAML:**
   - Use the "Copy to Clipboard" button to easily copy the generated YAML configuration and paste it into your `kits.yml` file.

## Contributing
We welcome contributions to improve this project! If you have ideas for new features or find any bugs, feel free to submit an issue or a pull request.

### How to Contribute:
1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes and push them to your fork.
4. Open a pull request describing your changes.


## Contact
For questions or suggestions, feel free to contact the project maintainer via GitHub or directly on discord `bttq`
