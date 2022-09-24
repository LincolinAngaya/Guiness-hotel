
import { Link } from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Login = () => {
  
  
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form action=''>
              <input type='text' name='email' placeholder='Email' />
              <input type='password' name='password'  placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>I forgot my password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default Login
