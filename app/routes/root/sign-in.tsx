import { ID } from 'appwrite';
import React, { useState } from 'react';
import { Link, redirect } from 'react-router';
import { signIn } from '~/appwrite/auth';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn(email, password);
    redirect('/dashboard');
  };

  return (
    <main className='auth'>
      <section className='size-full glassmorphism flex-center px-6'>
        <div className='sign-in-card'>
          <header className='header'>
            <Link to='/'>
              <img src='/assets/icons/logo.svg' alt='logo' className='size-[30px]' />
            </Link>
            <h1 className='p-28-bold text-dark-100'>TravaNest</h1>
          </header>
          <article>
            <h2 className='p-28-semibold text-dark-100 text-center'>Welcome Back</h2>
            <p className='p-18-regular text-center text-gray-100 !leading-7'>
              Sign In to continue your travel journey
            </p>
          </article>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
            <button type="submit" className='button-class !h-11 !w-full'>
              <span className='p-18-semibold text-white'>Sign In</span>
            </button>
          </form>
        </div>
      </section>
    </main>
    );
};

export default SignIn;