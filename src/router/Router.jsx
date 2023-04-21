import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


const NotFoundPage = lazy(() => import('../common/notFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../modules/auth/login/Login'));
const DashboardPage = lazy(() => import('../modules/admin/dashboard/DashboardPage'));
const RatingsPage = lazy(() => import('../modules/students/ratings/RatingsPage'));
const ListStudentsPage = lazy(() => import('../modules/admin/dashboard/listStudents/ListStudentsPage'));
const InsertStudentPage = lazy(() => import('../modules/admin/dashboard/insertStudent/InsertStudent'));
const UpdateStudentPage = lazy(() => import('../modules/admin/dashboard/updateStudent/UpdateStudent'));

export const Router = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<RatingsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} >
          <Route index element={<ListStudentsPage />} />
          <Route path="form-student" element={<InsertStudentPage />} />
          <Route path="form-student-update/:id" element={<UpdateStudentPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
