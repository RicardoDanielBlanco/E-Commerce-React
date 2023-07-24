import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css'
import { FormEvent, useContext } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { getUserProfile } from '../../hooks/useFetch';
import { URL_AUTH_LOGIN } from '../../global/constant';

interface userLoginData {
  email : string;
  password : string
}

function Login(){
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const authContext = useContext(AuthContext);
  
  const signinMutation = useMutation((user:userLoginData)=>{
    return axios.post(URL_AUTH_LOGIN, user)
  }, {
    onSuccess: async (data) => {
      try {
        const userData = data.data.access_token
        authContext.setUser(userData);
        const userProfile = await getUserProfile(userData);
        authContext.setRole(userProfile.role)
        navigate(from, {replace: true});
        localStorage.setItem('accessToken', userData);
        localStorage.setItem('roleProfile', userProfile.role);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const user: userLoginData = {email, password};

    signinMutation.mutate(user)
  }  
  
  return(
    <>
    <div className={styles.loginBox}>
      <h4>Welcome Back</h4>
      <p>Login with email</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Email"/>
        <input type="password" name="password" id="password" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    </div>
    <div>
      <p>Or create an <Link to={'/register'}>account</Link></p>
    </div>
    </>
  )
}

export default Login;