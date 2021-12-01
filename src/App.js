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
        <Router basename="/bazaroo">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                    exact
                    path="/dashboard/students"
                    element={<DashboardStudents />}
                />
                <Route
                    path="/dashboard/students/enroll"
                    element={<EnrollStudents />}
                />
                <Route
                    path="/dashboard/students/meditation"
                    element={<StudentsMeditation />}
                />
                <Route
                    path="/dashboard/teachers"
                    element={<DashboardTeachers />}
                />
                <Route
                    path="/dashboard/teachers/meditation"
                    element={<TeachersMeditation />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route element=element={<Register />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
