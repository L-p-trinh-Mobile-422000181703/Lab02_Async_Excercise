// Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
async function downloadFile() {
  console.log("Starting download...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Download complete!");
}
