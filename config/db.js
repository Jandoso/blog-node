if(process.env.NODE_ENV == "production"){
    module.exports ={mongoURI: "mongodb+srv://jandoso:a1b2c3d4e5@cluster0-34kgb.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}