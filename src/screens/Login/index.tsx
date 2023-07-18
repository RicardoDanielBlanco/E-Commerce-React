import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css'
import { FormEvent, useContext } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { getUserProfile } from '../../hooks/useFetch';

function Login(){
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const authContext = useContext(AuthContext);
  
  const signinMutation = useMutation((data)=>{
    return axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
  }, {
    onSuccess: async (data) => {
      try {
        const userData = data.data.access_token
        authContext.setUser(userData);
        const userProfile = await getUserProfile(data.data.access_token);
        authContext.setRole(userProfile.role)
        navigate(from, {replace: true});
        localStorage.setItem('accessToken', userData);
        console.log(authContext.user)
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    },
  });



  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const user = {email, password};

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