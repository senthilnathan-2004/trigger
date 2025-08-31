import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// API endpoint to trigger deploy
app.get("/trigger-deploy", async (req, res) => {
  try {
    const response = await fetch("https://api.render.com/deploy/srv-d2q1rj3e5dus73biskjg?key=3hyQEcy0I54", {
      method: "GET"
    });

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (err) {
    res.status(500).send("Error triggering deploy: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
