import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { API } from './api';
export function AddMovie() {
   const [name, setName] = useState("");
   const [rating, setRating] = useState();
   const [poster, setPoster] = useState();
   const [summary, setSummary] = useState()
   const [trailer, setTrailer] = useState()
   const navigate=useNavigate()
      const addMovie = () => {
      const newMovie = {
         name,
         poster,
         rating,
         trailer,
         summary,
      };

      //copy the existing movielist and add movie
    //  setmovies([...movielist, newMovie]);
      //1. method
  //2.body -data- JSON
      //3. Headers -JSOn
      
      fetch(`${API}/movies`,{
         method: "POST",
         body: JSON.stringify(newMovie),
         headers: {
            "Content-Type": "application/json"
         }
      }).then((res)=>res.json())
      .then(()=>navigate('/movies'))
    
      
   };

   return (
      <div className='add-movie-form'>
         <TextField
         label="Name" 
         variant="filled"
         value={name}
         onChange={(event) => setName(event.target.value)} />
       
       <TextField
         label="Rating" 
         variant="filled"
         value={rating}
         onChange={(event) => setRating(event.target.value)} />

<TextField
         label="Poster" 
         variant="filled"
         value={poster}
         onChange={(event) => setPoster(event.target.value)} />
<TextField
         label="Trailer" 
         variant="filled"
         value={trailer}
         onChange={(event) => setTrailer(event.target.value)} />

        
<TextField
         label="Summary" 
         variant="filled"
         value={summary}
         onChange={(event) => setSummary(event.target.value)} />
        
<Button variant="outlined"
         onClick={addMovie}
         >Add Movie</Button>
      </div>
   );
}


//edit movie->put method
//MovieDetails+AddMovie
//Edit Movie->/movies/edit/:id--route