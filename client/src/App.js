
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Chats from './components/Chats'
import Home from  './components/Home'
import "./App.css"


function App() {
  return (
     <Router>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/chats' element={<Chats/>} />
            
         </Routes>
     </Router>
  );
}

export default App;
