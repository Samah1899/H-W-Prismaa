import { prisma } from "../config/db";
import { Request, Response } from "express";


//create move
export const createmovie = async (req: Request, res: Response) => {
  try {
    let moviess = req.body;
    await prisma.movie.create({
      data: moviess,
    });
    console.log(moviess);
    res.json({ msg: "movie created", Movies: moviess });
  } catch (error) {
    console.log(error);
  }
};

//get all Mov

export const getallmovies = async (req: Request, res: Response) => {
  try {
    let moviess = await prisma.movie.findMany();
    console.log(moviess);
    res.json({ msg: "get all movies", "All Movies": moviess });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

//update movie

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const moviess = req.body;
    const { id } = req.params;
    await prisma.movie.update({
      where: {
        id,
      },
      data: moviess,
    });
    console.log(moviess);
    res.json({ msg: "movie updated", Movies: moviess });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

//delete movie

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const moviess = req.body;
    const { id } = req.params;
    await prisma.movie.delete({
      where: {
        id,
      },
    });
    console.log(moviess);
    res.json({ msg: "movie deleted", Movies: moviess });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
export const findmovieByname = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const moviess = await prisma.movie.findMany({
      where: {
        name,
      },
      select: {
        id: true,
        name: true,
        rating: true,
        duration: true,
        created: true,
        gener: true,
      },
    });
    console.log(moviess);
    res.json({ msg: "movie by name", Movies: moviess });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
//all movie with gener

export const movieWithGener = async (req: Request, res: Response) => {
  try {
    const gener = req.params;
    const moviess = await prisma.movie.findMany({
      where: {
        gener,
      },
      select: {
        id: true,
        name: true,
        duration: true,
        created: true,
        gener: true,
      },
    });
    console.log(moviess);
    res.json({ msg: "movie by name", Movies: moviess });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

//reating all movies with gener

export const movieWithReating = async (req: Request, res: Response) => {
  try {
    const moviess = await prisma.movie.findMany({
      where: {
        rating: parseInt(req.params.rating),
      },
    //   select: {
    //     id: true,
    //     name: true,
    //     rating: true,
    //     duration: true,
    //     created: true,
    //     gener: true,
    //   },
    });
    console.log(moviess);
    res.json({ msg: "movie by rating", Movies: moviess });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
