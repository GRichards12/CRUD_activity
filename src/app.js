const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms, updateFilm, deleteFilm, deleteFilms, updateFilms, listWithDirectors, listWithActors} = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    if(yargsObj.add) {
        await addFilm(collection, {title: yargsObj.title,actor: yargsObj.actor="not specified",director:yargsObj.director="not specified"});
        console.log("Entry added!");
    } else if(yargsObj.list) {
        await listFilms(collection);
    } else if(yargsObj.listWithDirectors){
        await listWithDirectors(collection);
    } else if(yargsObj.listWithActors){
        await listWithActors(collection);
    } else if(yargsObj.update){
        await updateFilm(collection,yargsObj.update, {title:yargsObj.title,actor:yargsObj.actor,director:yargsObj.director});
        console.log("Entry updated!");
    } else if(yargsObj.updateMulti){
        await updateFilms(collection,yargsObj.updateFilms, {title:yargsObj.title,actor:yargsObj.actor,director:yargsObj.director});
    }
     else if(yargsObj.delete){
        await deleteFilm(collection,yargsObj.delete);
        console.log("Entry deleted!")
    } else if(yargsObj.deleteMulti){
        await deleteFilms(collection,yargsObj.deleteMulti);
        console.log("Entries deleted!");
    }
    else {
        console.log("Wrong input!");
    }
    await client.close();
};

app(yargs.argv);