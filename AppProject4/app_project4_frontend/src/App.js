import React from "react";
import LoginPage from "./pages/login/LoginPage";
import ProjectsPage from './pages/projects/ProjectsPage';
import SideBar from "./Components/sidebar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/users/UsersPage";

function App() {
  return (
    <div>
      <Router>
        <SideBar />
        <Routes>
          <Route path='/' element={ <LoginPage /> } />
          <Route path='/usuarios' element={ <UsersPage /> } />
          <Route path='/proyectos' element={ <ProjectsPage /> } />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
