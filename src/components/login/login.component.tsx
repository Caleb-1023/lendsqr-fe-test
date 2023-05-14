import { useState } from 'react'
import './login.style.scss'



const Login = () => {
    // const pwdVisible = false
    const handlePwdVisible = () => {
        setPwdVisible(!pwdVisible)
    }
    const [pwdVisible, setPwdVisible] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [pwd, setPwd] = useState<string>('')

  return (
    <div className='login-page'>
        <div className='login-logo-container'>
            <img src="./lendsqr_logo.svg" alt="lendsqr logo" className='login-logo' />
        </div>
        <div className='login-illustrations'>
            <img src="./pablo-sign-in 1.svg" alt="illustration" />
        </div>
        <div className='login-container'>
            <div className='login'>
                <h1 className='login-heading'>Welcome!</h1>
                <p className='login-description'>Enter details to login.</p>
                <form className='login-form'>
                    <div className='login-input-container'>
                        <input type="email" className='login-input email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='login-input-container'>
                        <input type={pwdVisible? "text" : "password"} className='login-input password' placeholder='Password' onChange={(e) => setPwd(e.target.value)} /> <label className='show-pwd-btn' onClick={handlePwdVisible}>{pwdVisible? 'HIDE' : 'SHOW'}</label>
                    </div>
                    <button className='forgot-password'>FORGOT PASSWORD?</button>
                    <button className='login-btn'>LOG IN</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login