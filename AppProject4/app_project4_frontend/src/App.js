import React from "react";
import LoginPage from "./pages/login/LoginPage";
import SideBar from "./components/sidebar/SideBar";
import UsersPage from "./pages/users/UsersPage";
import MyProjects from "./pages/projects/myProjects/MyProjects";
import ProjectsAdmin from "./pages/projects/projectsAdmin/ProjectsAdmin";
import ProjectsEstud from "./pages/projects/projectsEstud/ProjectsEstud";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsLiderPage from './pages/projects/projectsLider/ProjectsLiderPage';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// const httpLink = createHttpLink({
//   uri: "https://alphateam-backend.herokuapp.com/graphql"
// });

const client = new ApolloClient({
  uri: "https://alphateam-backend.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={ client }>
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
    </ApolloProvider>
  );
}

export default App;
