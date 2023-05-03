import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login, signUp } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [view, setView] = useState("login")
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  const dispatch = useDispatch()



  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username !== "" && user.password !== "") {
      if(user.username===localStorage.getItem("name") && user.password===localStorage.getItem("pass"))
      {
        localStorage.setItem('user', user.username)
        localStorage.setItem('password', user.password)
        navigate('/table')
      }else{
        alert("InValid Credentails")
      }
      
    } else {
      alert("Please Enter Credentials")
    }

  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.pass !== "" && user.confirmPass !== "") {
      if (user.pass !== user.confirmPass) {
        alert("Both Password must be same")
      } else {
        localStorage.setItem('name', user.name)
        localStorage.setItem('pass', user.pass)
        setView("login")
      }

    } else {
      alert("Please Enter Values")
    }

  };
  const handleChange = (e) => {
    if (e.target.name === "username") {
      dispatch(login({ value: e.target.value, type: "userName" }))
    } else {
      dispatch(login({ value: e.target.value, type: "passWord" }))
    }
  }

  const handleSignUp = (e) => {
    if (e.target.name === "name") {
      dispatch(signUp({ value: e.target.value, type: "name" }))
    } else if (e.target.name === "pass") {
      dispatch(signUp({ value: e.target.value, type: "pass" }))
    } else {
      dispatch(signUp({ value: e.target.value, type: "confirmPass" }))
    }
  }





  return (
    <Container maxWidth="sm" >
      <Typography variant="h4" align="center" gutterBottom mt={3}>
        {view === "login" ? "Login" : "Sign Up"}
      </Typography>
      {view === "login" && <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          name="username"
          onChange={handleChange}
          margin="normal"
          value={user.username}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          name="password"
          onChange={handleChange}
          margin="normal"
          value={user.password}
        />
        <Button variant="contained" type="submit" color="success" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>}

      {view === "signup" && <form onSubmit={onSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          name="name"
          onChange={handleSignUp}
          margin="normal"
          value={user.name}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          name="pass"
          onChange={handleSignUp}
          margin="normal"
          value={user.pass}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          type="password"
          name="confirmPass"
          onChange={handleSignUp}
          margin="normal"
          value={user.confirmPass}
        />
        <Button variant="contained" type="submit" color="success" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </form>}
      {view === "login" && <Typography variant="h6" gutterBottom mt={2} sx={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => setView("signup")}>
        create an account?
      </Typography>}
      {view === "signup" && <Typography variant="h6" gutterBottom mt={2} sx={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => setView("login")}>
        already have account
      </Typography>}


    </Container>
  );
};

export default LoginForm;