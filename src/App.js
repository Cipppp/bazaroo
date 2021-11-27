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
} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
                    path="/dashboard/students/enroll-students"
                    element={<EnrollStudents />}
                />
                <Route
                    exact
                    path="/dashboard/students/students-meditation"
                    element={<StudentsMeditation />}
                />
                <Route
                    exact
                    path="/dashboard/teachers"
                    element={<TeachersMeditation />}
                />
                <Route
                    exact
                    path="/dashboard/teachers/teachers-meditation"
                    element={<DashboardTeachers />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
