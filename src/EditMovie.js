import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from './api';
import { EditMovieForm } from './EditMovieForm';

export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET"
    })
    .then((res) => res.json())
    .then((movie) => setMovie(movie));
  }, []);



  return movie ? <EditMovieForm movie={movie} /> : "Loading";
}
