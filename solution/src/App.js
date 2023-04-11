import React from 'react';
import {Routes,Route,BrowserRouter} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';

import JobApply from './components/JobApply/JobApply';

import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Statics from './components/Statics/Statics';
import Blog from './components/Blog/Blog';




function App() {
  return (
    

    <BrowserRouter>
<Routes>
       
       
<Route  path="/" element={<Navbar></Navbar>} >
              
              </Route>
        
       
          
        <Route  path="/Home" element={<Home></Home>} >
              
              </Route>
           
            <Route path="/applied-jobs" element={<JobApply></JobApply>}>
            
            </Route>
            <Route path="/statistics" element={ <Statics></Statics>}>
             
            </Route>
            <Route path="/blogs" element={ <Blog></Blog>}>
             
             </Route>
          
            <Route path="*" element={  <NotFound></NotFound>}>
            
            </Route>
          
        
    </Routes>
    </BrowserRouter>
    
  );
}


export default App;
