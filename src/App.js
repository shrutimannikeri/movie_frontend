
import { useState } from 'react';
import { AddMovie } from './AddMovie';
import './App.css';
import { ColorGame } from './ColorGame';
import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
import { Movielist } from './Movielist';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import {Routes, Route, Navigate,useNavigate} from 'react-router-dom'
import { MoviewDetailPage } from './MoviewDetailPage';
import { NotFound } from './NotFound';

import { EditMovie } from './EditMovie';
import { BasicForm } from './BasicForm';

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     marginLeft: theme.spacing(1),
     width: 'auto',
   },
 }));
 
 const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 }));
 
 const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
     padding: theme.spacing(1, 1, 1, 0),
     // vertical padding + font size from searchIcon
     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
     transition: theme.transitions.create('width'),
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       width: '12ch',
       '&:focus': {
         width: '20ch',
       },
     },
   },
 }));


function App() {

//const [movieList, setMovieList]=useState(INITIAL_MOVIE_LIST)
const [movieList, setMovieList]=useState([])

const [search,setSearch]=useState("")
//useNavigate is hook --its help to change url programattically
const navigate=useNavigate();

//structuere of useEffect
// useEffect(()=>{
//   fetch("https://62eca24d55d2bd170e83c335.mockapi.io/movies")
//   .then(res=>res.json())
//   .then(mvs=>setMovieList(mvs))
// },[])





  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
         
        
          <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
          <Button color="inherit" onClick={()=>navigate('/about')}>About</Button>
          <Button color="inherit" onClick={()=>navigate('/movies')}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate('/movies/add')}>Add Movies</Button>
          <Button color="inherit" onClick={()=>navigate('/basicform')}>Basic Form</Button>
          <Search sx={{ marginLeft: "auto" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            value={search}
            onChange={(event)=>setSearch(event.target.value)} 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      
        {/* <AddMovie movielist={movieList} setmovies={setMovieList}/>
      
    <Movielist movielist={movieList.filter((mv)=>mv.name.toLowerCase().includes(search.toLowerCase()))}/> */}
      {/* <ColorGame /> */}
   <Routes>
    <Route path="/" element={<Home />} />
 

    <Route path="/about" element={<About />} />
       {/* redirecting the old to new url like /film redirecting to /movies
       
       1.brand accquire
       
       */
       
       }
     <Route path="/film" element={<Navigate replace to="/movies" />}/>  
    <Route path="/movies" element={<Movielist search={search} />} />
    <Route path="/movies/add" element={<AddMovie />} />
    <Route path="/movies/:id" element={<MoviewDetailPage />} />
    <Route path="/movies/edit/:id" element={<EditMovie />} />
    
     { /*-> mathes any path */}
    <Route path="/404" element={<NotFound />} />
    { /*-> mathes any path  its navigate to /404 page*/}
    <Route path="*" element={<Navigate to="/404" />} />
    <Route path="/basicform" element={<BasicForm />} />
   </Routes>
    </div>
  );
}

function Home(){
  return(
    <div>welcome to movie app</div>
  )
}


function About(){
  return(
    <div>welcome to movie app</div>
  )
}



export default App;
