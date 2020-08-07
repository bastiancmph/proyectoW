import React, {useState} from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';


export default (props) =>{
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async ()=>{
      await firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    const logint = async()=>{
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }

    const logout = async ()=>{
       await firebase.auth().signOut();
    }

    return(
        <div>
            {
                !user &&
            <div>
                <div >
                <label htmlFor="email">Correo electronico:</label>
                <input type ="email" id="email" onChange={(ev)=>setEmail(ev.target.value) } />
                </div>
                <div>
                <label htmlFor="password">Contraseña:</label>
                <input type ="password" id="password" onChange={(ev)=>setPassword(ev.target.value) }  />
                </div>
                <div >
                <button onClick={submit} >  Crear cuenta </button>
                </div>  
                <div >
                <button onClick={logint}> Iniciar sesion</button>
                </div>     
            </div>
            }
            {
                user && <button onClick={logout}>Cerrrar sesion</button>
            }
        </div>
    )
}
