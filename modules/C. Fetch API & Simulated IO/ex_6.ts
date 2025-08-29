async function waitForDownload() {
  console.log("Waiting for download...");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Download ready!");
}
