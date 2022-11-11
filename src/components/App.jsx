import React from 'react';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { Container } from './Container/Container';
import { Route, Routes } from 'react-router-dom';
import { UserMenu } from './UserMenu/UserMenu';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserOperation } from 'redux/auth/auth-operations';
import { selectToken } from 'redux/auth/auth-selectors';
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const PrivatRoute = lazy(() => import('./PrivatRoute/PrivatRoute'));
const PublicRoute = lazy(() => import('./PublicRoute/PublicRoute'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    token && dispatch(currentUserOperation());
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Header />
      <Container>
        <UserMenu />
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<PrivatRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </Layout>
  );
};
