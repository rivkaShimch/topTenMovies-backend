const router = require('express').Router()

const { getMovies, addMovie, getMoviesByCategory} = require('../controller/movies.controller')

router.post('/movie/getMovies', getMovies)
router.post('/movie/addMovie', addMovie)
router.post('/movie/getMoviesByCategory', getMoviesByCategory)

module.exports = router