
// or export function getAllNotes(req, resp){}
export const getAllNotes = (req, resp) => {
    resp.status(200).send("Fetching the notes")
}

export const saveNotes = (req, resp) => {
    resp.status(201).json({message: "Note posted successfully"})
}

export const updateNotes = (req, resp) => {
    resp.status(200).json({message: "Note updated successfully"})
}

export const deleteNotes = (req, resp) => {
    resp.status(200).json({message: "Note deleted successfully"})
}