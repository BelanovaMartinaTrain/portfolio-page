import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./routes/Projects";
import Home from "./routes/Home";
import Journey from "./routes/Journey";
import Connect from "./routes/Connect";
import { useState, useEffect } from "react";
import LoadingPage from "./components/Loading";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for 10 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return isLoading ? (
        <LoadingPage />
    ) : (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/connect" element={<Connect />} />
            </Route>
        </Routes>
    );
}

export default App;
