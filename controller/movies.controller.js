const Movie = require('../models/movies.model');
function compare( a, b ) {
    if ( a.rate < b.rate ){
      return -1;
    }
    if ( a.rate > b.rate ){
      return 1;
    }
    return 0;
  }

getMovies = async (req, res) => {
    const movies = await Movie.find()
    if (movies) {
        await movies.sort(compare)
        res.status(200).json({ movies: movies })
    }
    else{
        res.status(500).json("An error has occurred")
    }
}

addMovie = async (req, res) => {
    const movies = await Movie.find()
    if (movies) {
        await movies.sort(compare)
        res.status(200).json({ movies: movies })
    }
    else{
        res.status(500).json("An error has occurred")
    }
}
getMoviesByCategory = async (req, res) => {
    console.log(req.body);
    const movies = await Movie.find({category:req.body.category})
    if (movies) {
        await movies.sort(compare)
        res.status(200).json({ movies: movies })
    }
    else{
        res.status(500).json("An error has occurred")
    }
}
module.exports = {
    getMovies,
    addMovie,
    getMoviesByCategory
}