const express = require('express');

const Notes = require("../models/note");

const router = express.Router();

router.get("/", async(req,res) => {
  try {
    const notes = await Notes.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})



module.exports = router;