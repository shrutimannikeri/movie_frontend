import { useState,useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
 //useEffect will call efvery time whenver prop or state change .so we need dependency arry value
  useEffect(()=>{
console.log("like is updates,"+like)
  },[like])

  return (
    <div className="counter-container">
     
    
       <IconButton color="primary" 
       aria-label="like-dislike" component="label" onClick={() => setLike(like + 1)}>
  
    
    <Badge badgeContent={like} color="primary">
   👍
</Badge>
       
      </IconButton>
      <IconButton color="primary" aria-label="upload picture" component="label"
      onClick={() => setDislike(dislike + 1)}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
       
      </IconButton>
      
    </div>
  );
}
