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
                <Route path="/bazaroo/" element={<Homepage />} />
                <Route
                    exact
                    path="/bazaroo/dashboard/students"
                    element={<DashboardStudents />}
                />
                <Route
                    path="/bazaroo/dashboard/students/enroll"
                    element={<EnrollStudents />}
                />
                <Route
                    path="/bazaroo/dashboard/students/meditation"
                    element={<StudentsMeditation />}
                />
                <Route
                    path="/bazaroo/dashboard/teachers"
                    element={<DashboardTeachers />}
                />
                <Route
                    path="/bazaroo/dashboard/teachers/meditation"
                    element={<TeachersMeditation />}
                />
                <Route path="/bazaroo/login" element={<Login />} />
                <Route path="/bazaroo/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
