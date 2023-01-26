import { useState } from 'react';
import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
export function MovieBox({ movie, id, deleteButton, editButton}) {
  const rate_color = {
    color: movie.rating >= 8 ? "green" : "red"
  };
  const navigate=useNavigate();
  const [show, setShow] = useState(true);
  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
      <div className="movie-specs"><h2 className="movie-name">{movie.name}
      
      <IconButton color="primary" 
       aria-label="toggle" component="label" 
       onClick={() => setShow(!show)}>
        {show ? <ExpandLessIcon />  :  <ExpandMoreIcon />} 
       
      </IconButton>
      <IconButton color="primary" 
       aria-label="detail_page"
       onClick={() => navigate(`/movies/${id}`)}>
       <InfoIcon />
      </IconButton>
      </h2>
        <p className="movie-rating" style={rate_color}>⭐ {movie.rating}</p>
      </div>
      
      {show ? <Typography className="movie-summary">
        {movie.summary} </Typography> : null}
        </CardContent>
        <CardActions>

      <Counter />
      {deleteButton}
      {editButton}
      </CardActions>

      
    </Card>



  );
}
