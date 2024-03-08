import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'

export default function Users(){
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(
            response => {
            console.log(response);
            setUsers(response.data.data);
        }
        )
        .catch(error =>{console.log(error);})
    }, [])

    return(
        <>
            {
                users.map(user=>(
                    <div key={user.id} className='c'>
                        <img src={user.avatar} alt='image do usuario'/>
                        <h3>{user.first_name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </>
    )
}