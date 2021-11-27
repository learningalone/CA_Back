const mongoose =require('mongoose');
// DB_URI=mongodb+srv://AlejoCx2:1193477073@cluster0.tzyid.mongodb.net/CA_DB?retryWrites=true&w=majority
mongoose.connect(process.env.DB_URI,{
    ssl: true
}).then(db => console.log('Coneccion Exitosa')).catch(err => console.log('Error: ',err));