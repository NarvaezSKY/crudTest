import { ChangeEvent, FormEvent, useState } from "react"
import styles from './styles.module.css'

export const UsersForm=({refetchUsers}:{refetchUsers:()=>void})=>{

    const defaultValue={
        firstname:'',
        lastname:'',
        image: null as File | null
    }

    const [form, setForm]=useState(defaultValue)
    const [isLoading, setIsLoading]=useState(false)

    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        if (e.target.name==="image"){
            const file =e.target.files ? e.target.files[0]:null
            setForm ({...form, [e.target.name]: file})
        }else{
            setForm ({...form, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsLoading(true)

        const formData=new FormData()

        for (const [key, value] of Object.entries(form)){
            formData.append(key,value!)
        }
        await fetch('http://localhost:3000/api/createuser', {
            method: 'POST',
            body: formData
        }).then(()=>{
            refetchUsers()
            setForm(defaultValue)
        }).catch(error=>{
            console.error(error)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    if (isLoading){
        return (
        <div className={styles.loader}> 
            Cargando...
        </div>
        )
        
    }


    return(
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h2>Crear Usuario</h2>
            <div>
                <input type="text" name="firstname" placeholder="First Name" value={form.firstname} onChange={handleChange}/>
                <input type="text" name="lastname" placeholder="Last Name" value={form.lastname} onChange={handleChange}/>
            </div>
        <input type="file" name="image" accept="image/png, image/jpg" id="" onChange={handleChange}/>
        <button type="submit">¡Subir Imagen!</button>
        


        </form>
    )
}