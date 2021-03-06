// Does npm init create a file? Yes. If it does, where does it create the file? within  the file you initiated. What is the name of the file? package.json 

const express = require("express");
const app = express();

const PORT = 3000;

const Pokemon = require("./models/pokemon");

app.use(express.static('public'));

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!")
});


app.get("/pokemon", (req, res) => {
	res.render("index.ejs", {
		pokemon: Pokemon
	})
});

app.get("/pokemon/:id", (req, res) => {
	res.render("show.ejs", {
		onePokemon: Pokemon[req.params.id]
	}) 
});




















app.listen(PORT, function(){
	console.log("Ready Player One")
});