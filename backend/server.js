import express from "express";
import notesRoute from "./routes/notesRoute.js";


const express = require("express");

const app = express();

// vai colocar como prefixo /api/notes
app.use("/api/notes", notesRoute);

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
})