import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Work from "./routes/Work"
import Home from "./routes/Home"
import Journey from "./routes/Journey"
import Connect from "./routes/Connect"

function App() {
  
  return (
    <Routes>
      <Route  element={ <Layout/> }>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/connect" element={<Connect/>} />
      </Route>
    </Routes>
  )
}

export default App
