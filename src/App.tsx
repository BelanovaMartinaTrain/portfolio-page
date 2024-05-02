import { Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Projects from "./routes/Projects";
import Home from "./routes/Home";
import Journey from "./routes/Journey";
import Connect from "./routes/Connect";
import { useState, useEffect } from "react";
import LoadingPage from "./routes/Loading";
import ProjectDetail from "./routes/subroutes/ProjectDetail";
import ProjectsNavBar from "./routes/subroutes/ProjectsNavbar";
import NotFoundComponent from "./routes/NotFoundComponent";
import CV from "./routes/CV";
import CVtest from "./routes/CVtest";
import CVDetail from "./routes/subroutes/CVDetail";

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
                <Route path="cv" element={<CV />} />
                <Route path="testcv/:language" element={<CVtest />}>
                    <Route index element={<CVDetail />} />
                </Route>
                <Route path="*" element={<NotFoundComponent />} />
            </Route>
        </Routes>
    );
}

export default App;
