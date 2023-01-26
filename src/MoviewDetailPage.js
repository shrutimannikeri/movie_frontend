import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect,useState } from 'react';
import { NotFound } from './NotFound';
import {API} from './api'
export function MoviewDetailPage() {

  //useNavigate()->when we use url 
  const navigate = useNavigate();


  const [movie, setMovie]=useState([])
  //useParam is Hooks to get url param value 
  const { id } = useParams();
  console.log(id);
 

  useEffect(()=>{fetch(`${API}/movies/${id}`,{
    method: "GET"
  })
  .then((res)=>res.json())
  .then((mvs)=>setMovie(mvs))
},[])

 // const movie = movieList[id];
  const rate_color = {
    color: movie.rating >= 8 ? "green" : "red"
  };
  if(!movie){
    return <NotFound />
  }
  return (
   
    <div>
     
      <iframe width="100%" height="550px"
        src={movie.trailer}
        title="Head Bush | Trailer | ZEE5 Original | Daali Dhananjaya | Payal Rajput | Buy Now"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='movie-detail-container'>
        <div className="movie-specs"><h2 className="movie-name">{movie.name}



        </h2>
          <p className="movie-rating" style={rate_color}>⭐ {movie.rating}</p>
        </div>

        <p className="movie-summary">
          {movie.summary} </p>
        <Button variant="contained" onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />}>Back</Button>
      </div>

    </div>
  );
}
