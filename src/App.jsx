import { useEffect } from "react";
import "./App.css";
import "yet-another-react-lightbox/styles.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    useEffect(() => {
        if (window.location.pathname === '/ponuda-napuhanaca.html') {
            window.location.replace('/');
        }
    }, []);
    return (
        <Router>
            <Routes>
                {/* Ostale rute */}
                <Route path="/" element={<Home />} />
                
                {/* Redirect za staru stranicu */}
                <Route path="/ponuda-napuhanaca.html" element={<Navigate to="/" replace />} />

                {/* Redirect za index.html */}
                <Route path="/index.html" element={<Navigate to="/" replace />} />
                
                {/* 404 stranica */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;

