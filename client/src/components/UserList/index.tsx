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
                </div>
            ))}
    </div>
    )
}