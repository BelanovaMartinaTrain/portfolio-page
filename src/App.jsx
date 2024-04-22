import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./routes/Projects";
import Home from "./routes/Home";
import Journey from "./routes/Journey";
import Connect from "./routes/Connect";
import { useState, useEffect } from "react";
import LoadingPage from "./components/Loading";
import ProjectDetail from "./routes/subroutes/projectDetail";
import ProjectsNavBar from "./routes/subroutes/projectsNavbar";
import NotFoundComponent from "./routes/NotFoundComponent";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for 8 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return isLoading ? (
        <LoadingPage />
    ) : (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<ProjectsNavBar />}>
                    <Route index element={<ProjectDetail />} />
                </Route>
                <Route path="journey" element={<Journey />} />
                <Route path="connect" element={<Connect />} />
                <Route path="*" element={<NotFoundComponent />} />
            </Route>
        </Routes>
    );
}

export default App;
