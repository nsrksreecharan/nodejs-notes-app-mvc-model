const Note = require('../models/noteModel');

exports.getAllNotes= ()=> Note.find().sort({createdAt: -1});
exports.getNoteByID= (id)=> Note.findById(id);
exports.createNote= (data)=> Note.create(data);
exports.updateNote= (id,data)=> Note.findByIdAndUpdate(id, data,{ new: true});
exports.deleteNote= (id)=> Note.findByIdAndDelete(id);