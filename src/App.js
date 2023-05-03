import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SimpleTable from './components/TableData';
import { fetchUsersAsync } from './redux/slices/soccerAction';
import Header from './components/Header';
import LoginForm from './components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const dispatch=useDispatch()
  React.useEffect(()=>{
     dispatch(fetchUsersAsync())
  },[])
  const navigate=useNavigate()

  React.useEffect(()=>{
    if(localStorage.getItem("user")){
      navigate('/table')
    }else{
      navigate('/')
    }
  },[])
  return (
    <div>
      <Header/>
      <Routes>
       {!!localStorage.getItem("user") && <Route path="/table" element={<SimpleTable/>} />}
       {!localStorage.getItem("user") && <Route path="/" element={<LoginForm/> }/>}
       </Routes>
    </div>
  );
}

export default App;
