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
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path={process.env.PUBLIC_URL + "/"} element={<Homepage />} />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/dashboard/students"}
                    element={<DashboardStudents />}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/dashboard/students/enroll"}
                    element={<EnrollStudents />}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/dashboard/students/meditation"}
                    element={<StudentsMeditation />}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/dashboard/teachers"}
                    element={<DashboardTeachers />}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/dashboard/teachers/meditation"}
                    element={<TeachersMeditation />}
                />
                <Route exact path={process.env.PUBLIC_URL + "/login"} element={<Login />} />
                <Route exact path={process.env.PUBLIC_URL + "/register"} element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
