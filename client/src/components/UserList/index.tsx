import { IUser } from "../../interfaces"
import styles from './styles.module.css'

export const UserList=({users}: {users:IUser[]})=>{
    if (!users)return null
    const fullName=(user: IUser)=>`${user.firstname} ${user.lastname}`
    console.log(users)
    return (
    <div className={styles.usersList}>
        {
            users.map((user)=>(
                <div key={user._id} className={styles.user}>
                    <img src={user.image} alt={fullName(user)}/>
                    <h2>
                        {fullName(user)}
                    </h2>
                    <button onClick={()=>{
fetch(`http://localhost:3000/api/delete/${user._id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al eliminar el usuario. Código de estado: ${response.status}`);
    }
    console.log('Usuario eliminado con éxito');
   
  })
  .catch(error => {
    console.error('Error en la solicitud DELETE:', error);
  });}}>Eliminar</button>
                </div>
            ))}
    </div>
    )
}

