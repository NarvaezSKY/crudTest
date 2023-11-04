import { UserList } from "./components/UserList"
import { useUsers } from "./hooks/useUsers"
import './App.css'
import {UsersForm}   from "./components/UserForm"


function App() {
  const {users, refetchUsers}=useUsers()

  return (
    <> 
    <main>
        <UsersForm refetchUsers={refetchUsers}/>
        <UserList users={users}/>
    </main>
    </>
  )
}

export default App
