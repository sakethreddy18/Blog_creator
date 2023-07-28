
import Navbar from './navbar';
import Home from './home';
import Create from './Create';
import BlogDetails from './BlogDetailsComponent';
import NotFound from './NotFound'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {



  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route path='/' element = {<Home></Home>}> </Route>
          <Route path='/create' element = {<Create></Create>}></Route>
          <Route path='/blog_details/:id' element = {<BlogDetails></BlogDetails>}></Route>
          <Route path='*' element = {<NotFound></NotFound>}></Route>
        </Routes>

      
     </div>
    </div>
    </Router>
  );
}

export default App;
