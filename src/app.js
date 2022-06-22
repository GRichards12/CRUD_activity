const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms, updateFilm, deleteFilm } = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    if(yargsObj.add) {
        await addFilm(collection, {title: yargsObj.title,actor: yargsObj.actor,director:yargsObj.director});
        console.log("Entry added!");
    } else if(yargsObj.list) {
        await listFilms(collection);
    } else if(yargsObj.update){
        await updateFilm(collection,yargsObj.update, {title:yargsObj.title,actor:yargsObj.actor,director:yargsObj.director});
        console.log("Entry updated!");
    } else if(yargsObj.delete){
        await deleteFilm(collection,yargsObj.delete);
        consle.log("Entry deleted!")
    }
    else {
        console.log("Wrong input!");
    }
    await client.close();
};

app(yargs.argv);