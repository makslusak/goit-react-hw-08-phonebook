import React from 'react';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { Container } from './Container/Container';
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <UserMenu />
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </Layout>
  );
};
