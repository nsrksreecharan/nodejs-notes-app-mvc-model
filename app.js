const express= require('express');
const app= express();
const cors =require('cors');
const morgan = require("morgan");
const errorHandler= require("./middleware/errorMiddleware");
const noteRoutes= require("./routes/noteRoutes");

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/notes',noteRoutes);
app.use(errorHandler);

module.exports=app;