// routes/movies.js

const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

// Fetch Movies from TMDb API
router.get("/search", async (req, res) => {
  const query = req.query.query;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Movie Details
router.get("/details/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/recommendations/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
