import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API } from './api';

//cvalidation 

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

export function AddMovie() {
   const formik = useFormik({
      initialValues: { name: "", poster: "",  rating: "", summary: "",trailer: "" },
      validationSchema: movieValidationSchema,
      onSubmit: (newMovie) => {
        console.log("onSubmit", newMovie);
        addMovie(newMovie);
      }
    })

   const navigate=useNavigate()
   const addMovie = (newMovie) => {
    
      console.log("createMovie", newMovie)
      fetch(`${API}/movies`, {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type":  "application/json",
        },
      }) 
    .then(res => res.json())
    .then(() => navigate("/movies"));
  
    }

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
      
              
          >Add Movie</Button>
  
  
        </form>
      </div>
    );
  
  }

// validation on add movie & edit movie
// name-reqired
// poster=min 4 ,required
// rating 0-10 ,required
// summary-min 20 Char, required
// trailer -min 4 ,reuired


//edit movie->put method
//MovieDetails+AddMovie
//Edit Movie->/movies/edit/:id--route

//without formik
// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import { API } from './api';
// export function AddMovie() {



// const formik=useFormik({
//    initialValues:{name:"",rating:"",poster:"",summary:"",trailer:""}

// })


//    const [name, setName] = useState("");
//    const [rating, setRating] = useState();
//    const [poster, setPoster] = useState();
//    const [summary, setSummary] = useState()
//    const [trailer, setTrailer] = useState()
//    const navigate=useNavigate()
//       const addMovie = () => {
//       const newMovie = {
//          name,
//          poster,
//          rating,
//          trailer,
//          summary,
//       };

//       //copy the existing movielist and add movie
//     //  setmovies([...movielist, newMovie]);
//       //1. method
//   //2.body -data- JSON
//       //3. Headers -JSOn
      
//       fetch(`${API}/movies`,{
//          method: "POST",
//          body: JSON.stringify(newMovie),
//          headers: {
//             "Content-Type": "application/json"
//          }
//       }).then((res)=>res.json())
//       .then(()=>navigate('/movies'))
    
      
//    };

//    return (
//       <div className='add-movie-form'>
//          <TextField
//          label="Name" 
//          variant="filled"
//          value={formik.values.name}
//          onChange={formik.handleChange}

//          // onChange={(event) => setName(event.target.value)} 
//          />
       
//        <TextField
//          label="Rating" 
//          variant="filled"
//          value={rating}
//          onChange={(event) => setRating(event.target.value)} />

// <TextField
//          label="Poster" 
//          variant="filled"
//          value={poster}
//          onChange={(event) => setPoster(event.target.value)} />
// <TextField
//          label="Trailer" 
//          variant="filled"
//          value={trailer}
//          onChange={(event) => setTrailer(event.target.value)} />

        
// <TextField
//          label="Summary" 
//          variant="filled"
//          value={summary}
//          onChange={(event) => setSummary(event.target.value)} />
        
// <Button variant="outlined"
//          onClick={addMovie}
//          >Add Movie</Button>
//       </div>
//    );
// }


// //edit movie->put method
// //MovieDetails+AddMovie
// //Edit Movie->/movies/edit/:id--route