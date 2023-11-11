import Home from "./pages/Home"
import SelectCategories from "./pages/SelectCategories"
import QuizPage from "./pages/QuizPage"
import Score from "./pages/Score"
import Answers from "./pages/Answers"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='selectcategories' element={<SelectCategories/>}/>
      <Route path="/" element={<Layout/>}>
        <Route path="quizpage" element={<QuizPage/>}/>
        <Route path="score" element={<Score/>}/>
        <Route path="answers" element={<Answers/>}/>
      </Route>
    </Routes>
  )
}

export default App