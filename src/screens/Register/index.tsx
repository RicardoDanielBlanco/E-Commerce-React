import { useMutation } from 'react-query';
import styles from './styles.module.css'
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register(){
    const from = '/login';
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const registerMutation = useMutation((data)=>{
        return axios.post('https://api.escuelajs.co/api/v1/users/', data)
      },{
        onSuccess(data){
            console.log(data)
            setShowMessage(true);
            setTimeout(() => {
            navigate(from, { replace: true });
        }, 3000);
        }
      })


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const avatar = formData.get('avatar');
        const user = {name, email, password, avatar};
    
        registerMutation.mutate(user)
      }

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (showMessage) {
        timer = setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      }
      return () => clearTimeout(timer);
    }, [showMessage]);

    return(
        <>
        <div className={styles.loginBox}>
          <h4>Welcome</h4>
          <p>Register by completing the information</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Username"/>
            <input type="email" name="email" id="email" placeholder="Email"/>
            <input type="password" name="password" id="password" placeholder="Password"/>
            <input type="text" name="avatar" id="avatar" placeholder="Link you image"/>
            <button type="submit">Register</button>
          </form>
        </div>
        {showMessage && <p>Please log in</p>}
        </>
      )
    }
    
    export default Register;