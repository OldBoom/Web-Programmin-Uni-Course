let fs = require("fs");
const fsPromises = require("fs").promises;

// Global variable for the file contents (task 1)
let fileContent;

// 1 + 2. Callback versions of readFile and writeFile
fs.readFile("text.txt", "utf8", function (error, data) {
  if (error) {
    console.log("Callback read error:", error);
    return;
  }

  fileContent = data;
  console.log("Callback read:", fileContent);

  fs.writeFile("copy.txt", fileContent, function (error) {
    if (error) {
      console.log("Callback write error:", error);
      return;
    }
    console.log("Callback write: execution was successful");
  });
});

// 3. Same flow with promises and await
async function copyWithPromises() {
  try {
    const data = await fsPromises.readFile("text.txt", "utf8");
    console.log("Promise read:", data);

    await fsPromises.writeFile("copy-promise.txt", data);
    console.log("Promise write: execution was successful");
  } catch (error) {
    console.log("Promise error:", error);
  }
}

copyWithPromises();
