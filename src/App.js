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
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route
                    exact
                    path="/dashboard/students"
                    element={<DashboardStudents />}
                />
                <Route
                    exact
                    path="/dashboard/students/enroll"
                    element={<EnrollStudents />}
                />
                <Route
                    exact
                    path="/dashboard/students/meditation"
                    element={<StudentsMeditation />}
                />
                <Route
                    exact
                    path="/dashboard/teachers"
                    element={<DashboardTeachers />}
                />
                <Route
                    exact
                    path="/dashboard/teachers/meditation"
                    element={<TeachersMeditation />}
                />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
