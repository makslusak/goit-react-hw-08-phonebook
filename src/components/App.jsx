import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';

import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { Container } from './Container/Container';
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </Layout>
  );
};
