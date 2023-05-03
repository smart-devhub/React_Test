import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';


 function Header() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user = useSelector(state => state.user)
  const handleLogout=()=>{
    dispatch(logout())
    localStorage.clear()
    navigate('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="" sx={{background:"teal"}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello {localStorage.getItem('user') ? user.username:""}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>{localStorage.getItem('user') && "Logout"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header