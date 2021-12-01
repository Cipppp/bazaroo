import './styles/output.css';
import './App.css';
import { Footer } from './components';
import {
    Homepage,
    DashboardStudents,
    DashboardTeachers,
    EnrollStudents,
    StudentsMeditation,
    TeachersMeditation,
    Login,
    Register,
} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/bazaroo/" element={<Homepage />} />
                <Route
                    exact
                    path="/bazaroo/dashboard/students"
                    element={<DashboardStudents />}
                />
                <Route
                    exact
                    path="/bazaroo/dashboard/students/enroll"
                    element={<EnrollStudents />}
                />
                <Route
                    exact
                    path="/bazaroo/dashboard/students/meditation"
                    element={<StudentsMeditation />}
                />
                <Route
                    exact
                    path="/bazaroo/dashboard/teachers"
                    element={<DashboardTeachers />}
                />
                <Route
                    exact
                    path="/bazaroo/dashboard/teachers/meditation"
                    element={<TeachersMeditation />}
                />
                <Route exact path="/bazaroo/login" element={<Login />} />
                <Route exact path="/bazaroo/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
