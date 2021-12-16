import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



function App(){

 const [fullName,setfullName] = useState('')
 const [username,setuserName] = useState('')
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
        const submitForm = (event)=>{
            event.preventDefault()

            const registered = {
                fullName:fullName,
                userName:username,
                email:email,
                password:password
            }

            axios.post("http://localhost:4000/app/signup",registered).then((response)=>{
                console.log(response.data);
            })

            
        }
    return(
        <div>

           <div className="container mt-5">
               <div className="form-div">
               <form onSubmit={submitForm}>
                   <h1 className="d-flex justify-content-centre">Signup page</h1>
                   <input type="text" className="form-control form group mt-2" placeholder="full Name" values={fullName} onChange={(e)=>setfullName(e.target.value)}/>
                   <input type="text" className="form-control form group mt-2" placeholder="username" values={username} onChange={(e)=>setuserName(e.target.value)}/>
                   <input type="text" className="form-control form group mt-2" placeholder="Email" values={email} onChange={(e)=>setEmail(e.target.value)}/>
                   <input type="password" className="form-control form group mt-2" placeholder="Password" values={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="submit" className="btn btn-danger mt-2 col-12"/>
               </form>
               </div>
               
           </div>
        </div>
    )
}

export default App;
