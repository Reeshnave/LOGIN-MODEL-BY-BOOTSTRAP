import React from 'react';

const Loginregister = () => {
    function redirected(){
        const Content= document.getElementById('content')
        const Login =document.getElementById('login')
        const Register=document.getElementById('register')

        Login.addEventListener('click',()=>{
            Content.classList.add('active');
        })
        Register.addEventListener('click',()=>{
            Content.classList.remove('active');
        })
    }
    return (
        
        <div className='content justify-content-center align-items-center d-flex shadow-lg'id='content'>
        <div className='col-md-6 d-flex justify-content-center'>
            <form>
                <div className='header-text mb-4'>
                    <h1>Create Account</h1>
                </div>
                <div className='input-group mb-3'id='forms'>
                    <input type='text' placeholder='Name'className='form-control form-control-lg bg-light fs-6'/>
                </div>
                <div className='input-group mb-3'id='forms'>
                    <input type='email' placeholder='Email'className='form-control form-control-lg bg-light fs-6'/>
                </div>
                <div className='input-group mb-3'id='forms'>
                    <input type='password' placeholder='password'className='form-control form-control-lg bg-light fs-6'/>
                </div>
                <div className='input-group mb-3 justify-content-center'id='forms'>
                    <button className='btn border-white text-white w-50 fs-6'>Regester</button>
                </div>
            </form>

        </div>




        <div className='col-md-6 right-box'>
            <form>
                <div className='header-text mb-4'>
                    <h1>Login</h1>
               </div>
                <div className='input-group mb-3'id='forms'>
                    <input type='email' placeholder='Email'className='form-control form-control-lg bg-light fs-6'/>
                </div>
                <div className='input-group mb-3'id='forms'>
                    <input type='password' placeholder='password'className='form-control form-control-lg bg-light fs-6'/>
                </div>
                <div className='input-group mb-5 d-flex justify-content-between'>
                    <div className='form-check'>
                        <input type='checkbox' className='form-check-input'/>
                        <label htmlFor='formcheck' className='form-check-label text-secondary'><small>Remember me </small></label>
                    </div>
                    <div className='forgot'>
                        <small><a href='#'>forgot password ?</a></small>
                    </div>
                </div>
                <div className='input-group mb-3 justify-content-center'id='forms'>
                    <button className='btn border-white text-white w-50 fs-6'>Login</button>
                </div>
            </form>

                
                  </div>
        <div className='switch-content'>
                    <div className='switch'>
                        <div className='switch-panel switch-left'>
                            <h1>
                                Hello ,Again
                            </h1>
                            <p>  We are happy to see you back</p>
                            <button className='hidden btn border-white text-white w-50 fs-6'id='login' onClick={redirected}>Login</button>
                        </div>
                        <div className='switch-panel switch-right'>
                            <h1>
                                Welcome
                            </h1>
                            <p>
                                Join Our Unique Platform,Explore a new Experence
                            </p>
                            <button className='hidden btn border-white text-white w-50 fs-6'id='register'onClick={redirected}>Register</button>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Loginregister;