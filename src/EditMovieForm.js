import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { API } from './api';

export function EditMovieForm({ movie }) {



  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();
  const updateMovie = () => {
    const updMovie = {
      name,
      poster,
      rating,
      trailer,
      summary,
    };

    //1. method
    //2.body -data- JSON
    //3. Headers -JSOn
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updMovie),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then(() => navigate('/movies'));


  };
  return (
    <div className='add-movie-form'>
      <TextField
        label="Name"
        variant="standard"
        value={name}
        onChange={(event) => setName(event.target.value)} />

      <TextField
        label="Rating"
        variant="standard"
        value={rating}
        onChange={(event) => setRating(event.target.value)} />

      <TextField
        label="Poster"
        variant="standard"
        value={poster}
        onChange={(event) => setPoster(event.target.value)} />
      <TextField
        label="Trailer"
        variant="standard"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)} />


      <TextField
        label="Summary"
        variant="standard"
        value={summary}
        onChange={(event) => setSummary(event.target.value)} />

      <Button variant="outlined"
        onClick={updateMovie}
      >Save Movie</Button>
    </div>
  );
}
