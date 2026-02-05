import express from "express"

const router = express.Router();

// Isto é  uma rota(route) para buscar as notas
router.get("/", (req, resp) => {
    resp.status(200).json({message: "You have 10 notes!"})
})
// Isto é uma rota para salvar as notas
router.post("/", (req, resp) => {
    resp.status(200).json({message: "Note posted successfully"})
})
// Isto é uma rota para atualizar as notas
// O Id tem a ver com que nota queremos atualizar
// Ex: // http://localhost:5001/api/notes/22
router.put("/id:", (req, resp) => {
    resp.status(200).json({message: "Note updated successfully"})
})
// Isto é uma rota para apagar as notas
router.delete("/", (req, resp) => {
    resp.status(200).json({message: "Note deleted successfully"})
})
export default router;
