const noteService =require("../services/noteService");

exports.getNotes = async (req,res,next)=>{
    try {
        const notes = await noteService.getAllNotes();
        res.json({notes});
    } catch (err){
        next(err);
    }
};

exports.getNote= async(req,res,next)=>{
    try {
        const note= await noteService.getNoteByID(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.json(note);
    } catch (err){
        next(err);
    }
}

exports.createNote= async (req,res,next)=>{
    try {
        const note= await noteService.createNote(req.body);
        res.status(201).json(note);
    } catch (err){
        next(err);
    }
};

exports.updateNote=async(req,res,next)=>{
    try{
        const note =await noteService.updateNote(req.params.id, req.body);
        if(!note) return res.status(404).json({message:"Note not found" });
        res.json(note);
    } catch (err){
        next(err);
    }
};

exports.deleteNote= async (req,res,next)=>{
    try{
        const note = await noteService.deleteNote(req.params.id);
        if(!note)return res.status(404).json({message: " Note not found"});
        res.json({message: "Deleted successfully"});
    } catch (err) {
        next(err);
    }
};