import express from "express";
import { getAllNotes } from "../Controllers/notesController.js"
import { saveNotes } from "../Controllers/notesController.js"
import { updateNotes } from "../Controllers/notesController.js"
import { deleteNotes } from "../Controllers/notesController.js"

const router = express.Router();

// Isto é  uma rota(route) para buscar as notas
router.get("/", getAllNotes)

// Isto é uma rota para salvar as notas
router.post("/", saveNotes)

// Isto é uma rota para atualizar as notas
// O Id tem a ver com que nota queremos atualizar
// Ex:http://localhost:5001/api/notes/22
router.put("/id:", updateNotes)

// Isto é uma rota para apagar as notas
router.delete("/", deleteNotes)
export default router;
