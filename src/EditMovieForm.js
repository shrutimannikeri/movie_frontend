import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { API } from './api';
import { useFormik } from 'formik';
import * as yup from 'yup';

const movieValidationSchema = yup.object({
  name: yup
  .string()
  .required("Please fill the name?"),
  poster: yup
  .string()
  .min(4,"Need longer poster")
  .required("Please fill the poster?"),
  rating: yup
  .number()
  .min(0,"Need higher rating")
  .max(10, "Too much rating")
  .required("Please fill the rating?"),
  summary: yup
  .string()
  .min(20,"Need longer summary")
  .required("Please fill the summary?"),
  trailer: yup
  .string()
  .min(4,"Need longer trailer")
  .required("Please fill the trailer?"),
})

export function EditMovieForm({ movie }) {
  const formik = useFormik({
    initialValues: { 
      name: movie.name, 
      poster: movie.poster, 
       rating: movie.rating,
        summary: movie.summary,trailer: movie.trailer },
    validationSchema: movieValidationSchema,
    onSubmit: (editMovie) => {
      console.log("onSubmit", editMovie);
      updateMovie(editMovie);
    }
  })


  const navigate = useNavigate();
  const updateMovie = (editMovie) => {
   
    //1. method
    //2.body -data- JSON
    //3. Headers -JSOn
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(editMovie),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then(() => navigate('/movies'));


  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="add-movie-form">
  
  <TextField 
  id="name"
  name="name"

  value={formik.values.name} 
  onChange={formik.handleChange} 
  onBlur={formik.handleBlur}

  label="Name" 
  variant="standard" />
  {formik.touched.name && formik.errors.name ? formik.errors.name  : ''}

  <TextField 
  id="poster"
  name="poster"
 
  value={formik.values.poster} 
  onChange={formik.handleChange} 
  onBlur={formik.handleBlur}

  label="Poster" 
  variant="standard" />
  
  {formik.touched.poster && formik.errors.poster ? formik.errors.poster  : ''}


  <TextField 
  id="rating"
  name="rating"

  value={formik.values.rating} 
  onChange={formik.handleChange} 
  onBlur={formik.handleBlur}

  label="Rating" 
  variant="standard" />
       {formik.touched.rating && formik.errors.rating ? formik.errors.rating  : ''}

  <TextField 
  id="summary"
  name="summary"

  value={formik.values.summary} 
  onChange={formik.handleChange} 
  onBlur={formik.handleBlur} 
 
  label="Summary" 
  variant="standard" />
       {formik.touched.summary && formik.errors.summary ? formik.errors.summary  : ''}

  <TextField 
  id="trailer"
  name="trailer"

  value={formik.values.trailer} 
  onChange={formik.handleChange} 
  onBlur={formik.handleBlur}  

  label="Trailer" 
  variant="standard" />
{formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer  : ''}

  <Button 
  type="submit"
  variant="contained"
    //cope the MovieList and add newMovie to it

      
  >Save Movie</Button>


</form>
    </div>
  );
}


//using state
// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import { API } from './api';

// export function EditMovieForm({ movie }) {



//   const [name, setName] = useState(movie.name);
//   const [poster, setPoster] = useState(movie.poster);
//   const [rating, setRating] = useState(movie.rating);
//   const [summary, setSummary] = useState(movie.summary);
//   const [trailer, setTrailer] = useState(movie.trailer);

//   const navigate = useNavigate();
//   const updateMovie = () => {
//     const updMovie = {
//       name,
//       poster,
//       rating,
//       trailer,
//       summary,
//     };

//     //1. method
//     //2.body -data- JSON
//     //3. Headers -JSOn
//     fetch(`${API}/movies/${movie.id}`, {
//       method: "PUT",
//       body: JSON.stringify(updMovie),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }).then((res) => res.json())
//       .then(() => navigate('/movies'));


//   };
//   return (
//     <div className='add-movie-form'>
//       <TextField
//         label="Name"
//         variant="standard"
//         value={name}
//         onChange={(event) => setName(event.target.value)} />

//       <TextField
//         label="Rating"
//         variant="standard"
//         value={rating}
//         onChange={(event) => setRating(event.target.value)} />

//       <TextField
//         label="Poster"
//         variant="standard"
//         value={poster}
//         onChange={(event) => setPoster(event.target.value)} />
//       <TextField
//         label="Trailer"
//         variant="standard"
//         value={trailer}
//         onChange={(event) => setTrailer(event.target.value)} />


//       <TextField
//         label="Summary"
//         variant="standard"
//         value={summary}
//         onChange={(event) => setSummary(event.target.value)} />

//       <Button variant="outlined"
//         onClick={updateMovie}
//       >Save Movie</Button>
//     </div>
//   );
// }
