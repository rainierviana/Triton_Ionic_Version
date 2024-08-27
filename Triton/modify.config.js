const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'src/assets/data/appconfig.json');

// Function to read, modify, and write JSON file
function modifyConfig(newConfig) {
  // Read the existing JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    let config;
    try {
      // Parse JSON data
      config = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      return;
    }

    // Modify the configuration
    config = { ...config, ...newConfig };

    // Write the updated JSON data back to the file
    fs.writeFile(filePath, JSON.stringify(config, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return;
      }
      console.log('Configuration updated successfully!');
    });
  });
}

// Example usage
const newConfig = {
  appTitle: "New App Title",
  headerImage: "path/to/new/image.png",
  footerText: "Updated footer text",
  defaultLanguage: "en"
};

modifyConfig(newConfig);
