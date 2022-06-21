const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms } = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    if(yargsObj.add) {
        await addFilm(collection, {title: yargsObj.title,actor: yargsObj.actor});
        console.log("entry added");
    } else if(yargsObj.list) {
        await listFilms(collection);
    } else {
        console.log("wrong input");
    }
    await client.close();
};

app(yargs.argv);