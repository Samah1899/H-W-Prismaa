import express from 'express'
import { createmovie, deleteMovie, findmovieByname, getallmovies, movieWithGener, movieWithReating, updateMovie } from '../controller/movie.controller'
import validate from '../middleware/validate'
import { movietype } from '../zod.shema/zod.user'
const router=express.Router()

router.post('/',validate(movietype),createmovie)
router.get('/',getallmovies)
router.put('/:id',updateMovie)
router.delete('/:id',deleteMovie)
router.get('/name/:name',findmovieByname)
// router.get('/:gener',movieWithGener)
router.get('/rating/:rating',movieWithReating)

export default router
