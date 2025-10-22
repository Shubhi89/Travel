import {ButtonComponent } from '@syncfusion/ej2-react-buttons'
import React from 'react'
import { Link } from 'react-router'
import { signUp } from '~/appwrite/auth'

const SignUp = () => {
  return (
    <main className='auth'>
        <section className='size-full glassmorphism flex-center px-6'>
            <div className='sign-in-card'>
                <header className='header'>
                    <Link to='/'>
                        <img src='/assets/incons/logo.svg' alt='logo' className='size-[30px]'/>
                    </Link>
                    <h1 className='p-28-bold text-dark-100'>TravaNest</h1>
                </header>
                <article>
                    <h2 className='p-28-semibold text-dark-100 text-center'>Start Your Travel Journey</h2>
                    <p className='p-18-regular text-center text-gray-100 !leading-7'>Sign in with your Email to manage destinations , itineraries and user activity with ease</p>
                </article>
                <ButtonComponent className='button-class !h-11 !w-full'iconCss='e-search-icon' type='button' onClick={signUp()}>
                    <img src='/assets/icons/google.svg' className='size-5' alt='google'/>
                    <span className='p-18-semibold text-white'>Sign Up with Email</span>
                </ButtonComponent>
            </div>
        </section>
    </main>
  )
}

export default SignUp