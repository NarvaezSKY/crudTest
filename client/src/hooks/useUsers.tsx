import { useState, useEffect } from "react";
import {IUser} from '../interfaces'

export const useUsers=()=>{
    const [users, setUsers]=useState<IUser[]|[]>([])
    const fetchUsers=()=>{
        fetch('http://localhost:3000/api/user',{
            headers: {
                'Cache-Control': 'no-cache',
              },
        })
        .then(res=>res.json())
        .then((data:{users:IUser[]})=>setUsers(data.users)) 
        .catch((error) => {
            console.error('Error al obtener datos de usuarios:', error);
          });
    }

    useEffect(()=>{
        fetchUsers()
    }, [])


    return{
        users,
        refetchUsers:fetchUsers
    }
}