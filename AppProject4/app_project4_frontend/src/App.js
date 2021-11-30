import React from "react";
import LoginPage from "./pages/login/LoginPage";
import SideBar from "./components/sidebar/SideBar";
import UsersPage from "./pages/users/UsersPage";
import MyProjects from "./pages/projects/myProjects/MyProjects";
import ProjectsAdmin from "./pages/projects/projectsAdmin/ProjectsAdmin";
import ProjectsEstud from "./pages/projects/projectsEstud/ProjectsEstud";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsLiderPage from './pages/projects/projectsLider/ProjectsLiderPage';

function App() {
  return (
    <div>
      <Router>
        <SideBar />
        <Routes>
          <Route path='/' element={ <LoginPage /> } />
          <Route path='/usuarios' element={ <UsersPage /> } />
          <Route path='/proyectosAdmin' element={ <ProjectsAdmin /> } />
          <Route path='/proyectosLider' element={ <ProjectsLiderPage /> } />
          <Route path='/proyectosEstud' element={ <ProjectsEstud /> } />
          <Route path='/misProyectos' element={ <MyProjects /> } />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
