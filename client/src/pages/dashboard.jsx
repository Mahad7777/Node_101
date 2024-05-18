import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext} from '../../context/userContext'
import { toast } from 'react-hot-toast';

export default function dashboard() {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    const handlesubmit = ()=>{
        try{
            localStorage.removeItem('userAuthenticated')
            navigate('/login')
            toast.success("Successfuly Logged out!")
        }catch(err){
            console.log(err)
        }
    }
    return (
    <>
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h2>Hello {user.username}</h2>)}
    </div>
    <button onClick={handlesubmit}>Logout</button>
    </>
)
}
