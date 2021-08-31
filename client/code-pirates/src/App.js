import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Switch,
  Route,
  useHistory,
  useParams,
  Link
  } from 'react-router-dom'

  import LectureForm from './pages/LectureForm'
  import AboutUs from './pages/AboutUs'
  import LectureList from './pages/LectureList'
  import BootcampList from './pages/BootcampList'
  import BootcampShowPage from './pages/BootcampShowPage'
  import LectureShowPage from './pages/LectureShowPage'
  import Login from './pages/Login'
  import ContactForm from './pages/ContactForm'
  import SignUpForm from './pages/SignUpForm'
  import UserShowPage from './pages/UserShowPage'
  import Nav from './components/Nav'

   
  function App() {
  //can't be empty array
   
   
  //  const history = useHistory()
  //  const params = useParams()

  //  history.push('/lectures')
   return (
     <div>
         <Nav
         />
         <Switch>
            
             <Route path="/new">
                 <LectureForm />
                 {/* <ProjectForm onAddProject={handleAddProject} /> */}
             </Route>
             <Route exact path="/login">
                 <Login  />
             </Route>
             <Route exact path="/lectures/:id">
                 <LectureShowPage  />
             </Route>
             <Route exact path="/lectures">
                 <LectureList  />
             </Route>
             <Route exact path="/bootcamps/:id">
                 <BootcampShowPage  />
             </Route>
             <Route exact path="/bootcamps">
                 <BootcampList  />
             </Route>
             <Route exact path="/users/:id">
                 <UserShowPage  />
             </Route>
             <Route exact path="/contact">
                 <ContactForm  />
             </Route>
             <Route exact path="/signup">
                 <SignUpForm  />
             </Route>
             <Route path="/">
                 <AboutUs />
             </Route>
             <Route path="*">
                  <h1>404 not found</h1>
             </Route>
         </Switch>
     </div>
   );
  }
  

  export default App;