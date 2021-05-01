import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './LoginPage.scss';

function LoginPage() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(resolve => {
                history.push('/');
            })
            .catch(error => alert(error.message));
        //firebase login
    };
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(registered => {
                console.log(registered);
                if (registered) {
                    history.push('/');
                }
            })

            .catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img src='/img/sigma.svg' className='login__logo' alt='logo' />
            </Link>
            <div className='login__container'>
                <h1>Zaloguj się</h1>
                <form>
                    <h3>E-mail</h3>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}></input>
                    <h3>Hasło</h3>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}></input>
                    <button type='submit' onClick={signIn} className='login__button'>
                        Zaloguj się
                    </button>
                </form>
                <h4>Nie masz konta?</h4>
                <button onClick={register} className='login__registerButton'>
                    Zarejestruj się
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
