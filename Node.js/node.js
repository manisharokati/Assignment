const fs = require("fs");

// Specify the input and output file paths
const inputFile = "input.json";
const outputFile = "output.json";
fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const userData = JSON.parse(data);

    const modifiedData = userData.map((user) => {
      const totalPosts = user.posts.length;
      return { ...user, totalPosts };
    });
    fs.writeFile(
      outputFile,
      JSON.stringify(modifiedData, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing output file:", err);
        } else {
          console.log(`Data successfully written to ${outputFile}`);
        }
      }
    );
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
