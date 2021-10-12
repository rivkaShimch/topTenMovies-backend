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
        movies.sort(compare)
        res.json({ movies: movies })
    }
}


module.exports = {
    getMovies,
    addMovie,
    getMoviesByCategory
}