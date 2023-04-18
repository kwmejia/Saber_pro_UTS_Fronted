import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


const NotFoundPage = lazy(() => import('../common/notFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../modules/auth/login/Login'));

export const Router = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<h1>Principal</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
