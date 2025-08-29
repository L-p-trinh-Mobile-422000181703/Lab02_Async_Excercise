async function fetchWithRetry(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error("Fetch attempt failed:", error);
      if (i === retries - 1) throw error;
    }
  }
}
