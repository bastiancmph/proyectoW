import React, {useState} from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { render } from '@testing-library/react';



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
                 
        <div class="px-40 max-w-4xl" >
            <div class="max-w rounded overflow-hidden shadow-lg">
                <nav class="flex items-center justify-between flex-wrap bg-black p-2">
                <span class="font-semibold text-white tracking-tight">What you see now</span>
                </nav>
            </div>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Correo electronico" htmlFor="email">Correo electronico:</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Correo electronico" type ="email" id="email" onChange={(ev)=>setEmail(ev.target.value) } />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Contraseña" htmlFor="password">Contraseña:</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="****************" type ="password" id="password" onChange={(ev)=>setPassword(ev.target.value) }  />
                </div>
                <div >
                    <button onClick={submit} class="bg-transparent text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded-1" >  Crear cuenta </button>
                </div>  
                <div >
                    <button onClick={logint} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Iniciar sesion</button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Olvidaste tu clave?
                    </a>
                </div>  
            </form>   
            </div>
            }

            {
                user && <button onClick={logout} class="bg-transparent text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded-1">Cerrrar sesion</button>
            }
        </div>
        
       
    )
}
