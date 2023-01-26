import { MovieBox } from "./MovieBox";
import { useEffect, useState } from 'react';
import {API} from './api'
import { NotFound } from "./NotFound";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
export function Movielist({search}) {

const [movieList, setMovieList]=useState([])
  // useEffect(()=>{
  //   fetch("https://62eca24d55d2bd170e83c335.mockapi.io/movies")
  //   .then(res=>res.json())
  //   .then(mvs=>setMovieList(mvs))
  // },[]) or
  const navigate=useNavigate();
  //get list of movie
  const getMovies=()=>{
    fetch(`${API}/movies`,{
      method: "GET",
    })
    .then(res=>res.json())
    .then(mvs=>setMovieList(mvs))
  }
  useEffect(()=>getMovies(),[]) 

  //delete movie
  const DeleteMovie=(id)=>{
    fetch(`${API}/movies/${id}`,
        {method:"DELETE"})
      .then(()=>getMovies())
  }


  return (
    <div className="movie-containers">
      {movieList.filter((mv)=>mv.name.toLowerCase().includes(search.toLowerCase())).map((mv, ind) => (
        <MovieBox movie={mv} key={ind} id={mv.id}
        deleteButton={
        <IconButton aria-label="delete" color="error"
        onClick={()=>{DeleteMovie(mv.id)}}
        >
        <DeleteIcon />
      </IconButton>
      }
      //edit
      editButton={
        <IconButton aria-label="edit" color="primary"
        onClick={()=>{navigate(`/movies/edit/${mv.id}`)}}
        >
        <EditIcon />
      </IconButton>
      }
        />
      ))}

    </div>
  );
}
