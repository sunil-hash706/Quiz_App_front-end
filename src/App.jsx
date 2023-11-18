import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import AddQuestion from './assets/components/AddQuestion'
import AddQuestion from './assets/components/addQuestion'
import QuestionCard from './assets/components/questionCard'
import Nav from './assets/components/nav'
import AllQuestions from './assets/components/allQuestions'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          {/* <Route path='/' element={<Dashbord></Dashbord>} /> */}
          <Route path='/questions' element={<AllQuestions></AllQuestions>} />
          <Route path='/add-question' element={<AddQuestion></AddQuestion>} />
          {/* <Route path='/about' element={<AboutMe></AboutMe>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
