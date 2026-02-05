// import express from "express"
const express = require("express")

const app = express();

// Isto é  uma rota(route)
app.get("/api/notes", (req, resp) => {
    resp.status(200).send("11 notes")
})

// put something to DB
app.post("/api/notes", (req, resp) => {
    resp.status(201).json({message:"Node posted successfully"})
})

// update
app.put("/api/notes/:id", (req, resp) => {
    resp.status(201).json({message:"Note updated successfully"})
})
// delete
// The id is for the note we want to edit
app.delete("/api/notes/:id", (req, resp) => {
    resp.status(201).json({message:"Note deleted successfully"})
})

// http://localhost:5001/api/notes/22
app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
})