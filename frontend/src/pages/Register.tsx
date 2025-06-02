
import React from 'react';
import Navigation from '@/components/Navigation';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <RegistrationForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
