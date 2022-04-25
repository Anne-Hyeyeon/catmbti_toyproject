import './App.css';
import Home from './pages/Home'
import Question from './pages/Question'
import Result from './pages/Result'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Question' element={<Question />} />

      </Routes>
    </div>
  )
}

export default App;