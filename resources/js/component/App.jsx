import React from "react";
import Dashboard from './Admin/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Admin/Student";
import Edittudent from './Admin/Students/Editstudent';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/admin/student" element={<Student />} />
                    <Route path="/admin/student/edit/:id" element={<Edittudent />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;