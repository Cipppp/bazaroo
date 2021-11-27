import './styles/output.css';
import './App.css';
import { Footer, Navbar, Sidebar } from './components';
import { Homepage, Dashboard } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useWindowDimensions from './components/hooks/useWindowDimensions';
function App() {
    // eslint-disable-next-line
    const { height, width } = useWindowDimensions();

    return (
        <Router>
            {width > 600 ? <Navbar /> : <Sidebar />}
            <Routes>
                <Route exact path="/" element={<Homepage />} />

                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
