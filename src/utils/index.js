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

exports.listWithDirectors = async (collection) => {
    try{
        let filtered = await collection.aggregate([{$match:{director:{$ne:"not specified"}}}]).toArray();
        console.log(filtered);
    }
    catch(error){
        console.log(error);
    }
}

exports.updateFilm = async (collection, oldTitle,newFilm) => {
    try{
        const checkTitle = {title:oldTitle};
        const updateTo = {$set:{title:newFilm.title,actor:newFilm.actor,director:newFilm.director}};
        const filmUpdate = await collection.updateOne(checkTitle,updateTo);
        console.log(filmUpdate);
    }
    catch (error){
        console.log(error);
    }
}

exports.updateFilms = async (collection, oldTitle, newFilm) => {
    try{
        const checkTitle = {title:oldTitle};
        const updateTo = {$set:{title:newFilm.title,actor:newFilm.actor,director:newFilm.director}};
        const filmsUpdate = await collection.updateMany(checkTitle,updateTo);
        console.log(filmsUpdate);
    } catch(error){
        console.log(error);
    }
}

exports.deleteFilm = async (collection, toDelete) => {
    try{
        const deleteTitle = {title:toDelete};
        const filmDelete = await collection.deleteOne(deleteTitle);
        console.log(filmDelete);
    }
    catch (error){
        console.log(error);
    }
}

exports.deleteFilms = async (collection, toDelete) => {
    try{
        const deleteTitle = {title:toDelete};
        const filmDelete = await collection.deleteMany(deleteTitle);
        console.log(filmDelete);
    } catch(error) {
        console.log(error);
    }
}
