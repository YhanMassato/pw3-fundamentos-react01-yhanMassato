import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'


export default function CreateUsers(){

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    function createUsers(event)
    {
        event.preventDefault();
        let user = JSON.stringify({name:name, job:job});
    


    axios.post('https://reqres.in/api/users?page=2', user)
        .then(
            response => {
            console.log(response);
            alert(response)
        }
        )
        .catch(error =>{console.log(error);
            alert(error)        
        })


    }


    return(
            <form onSubmit={createUsers}>
                <input 
                type='text'
                placeholder='Insira seu nome'
                value={name}
                onChange={(event) => {setName(event.target.value)}}/>

                <input
                type='text'
                placeholder='Insira sua profissao'
                value={job}
                onChange={(event) => {setJob(event.target.value)}}
                />

                <input type='submit'/>
            </form>
    )
}