import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Projects from "./routes/Projects"
import Home from "./routes/Home"
import Journey from "./routes/Journey"
import Connect from "./routes/Connect"

function App() {
  
  return (
    <Routes>
      <Route  element={ <Layout/> }>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/connect" element={<Connect/>} />
      </Route>
    </Routes>
  )
}

export default App
