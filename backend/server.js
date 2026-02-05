// import express from "express"
const express = require("express")

const app = express();

app.get("/api/notes", (req, resp) => {
    resp.status(200).send("11 notes")
})

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
})