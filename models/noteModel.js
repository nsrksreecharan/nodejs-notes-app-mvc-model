const mongoose= require('mongoose');

const noteSchema= new mongoose.schema(
    {
        title: { type: String, required: true},
        content: { type: String, required: true},
    },
    { timestamps:true}
);

module.exports = mongoose.model('notes', noteSchema);