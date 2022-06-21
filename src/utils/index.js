exports.addFilm = async (collection, filmObj) => {
    try {
        const addEntry = await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
}

exports.listFilms = async (collection) => {
    try {
        const filmList = await collection.find().toArray();
        console.log(filmList);
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateFilm = async (collection, filmObj) => {
    try{
        const filmUpdate = await collection.updateOne(filmObj);
        console.log(filmUpdate);
    }
    catch (error){
        console.log(error);
    }
}

exports.updateFilms = async (collection, filmObj) => {
    try{
        const filmsUpdate = await collection.updateMany(filmObj);
        console.log(filmsUpdate);
    }
    catch (error){
        console.log(error);
    }
}

exports.deleteFilm = async (collection, filmObj) => {
    try{
        const filmDelete = await collection.deleteOne(filmObj);
        console.log(filmUpdate);
    }
    catch (error){
        console.log(error);
    }
}