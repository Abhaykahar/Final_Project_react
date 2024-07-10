import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../../fireStoreConfig'
import { collection, getDocs, getFirestore } from 'firebase/firestore';


let db=getFirestore(app);


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")


const navigate=useNavigate()

    const handle = async(e) =>{
        e.preventDefault()


        try{
            let record= collection(db,"users");
            const users=await getDocs(record);
            let data=users.docs.map(val =>({
              id:val.id,
              ...val.data()
            }))
            let login = data.filter(val => val.email === email && val.password === password);
            if(login.length === 0){
              toast("email and password not valid");
              setEmail("");
              setPassword("");
            }else{
              navigate('/home');
              toast("sucessfully Login...");
            }
        }catch(err){
          console.log(err);
          return false;
        }
      }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto" style={{marginTop:'150px'}}>
                <div className="card p-5 shadow">
                    <h1 align="center" className='mb-4'>Login</h1>
              <form onSubmit={handle}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email Id</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} />
  </div>
  <div className="mb-3">


    <a href='#' className='d-flex justify-content-end d-block text-dark text-decoration-none'>Forget password</a>
  </div>
  <button type="submit" className="btn btn-dark  w-100 mt-2 mb-4">Submit</button>
        <span className='mt-3' style={{marginLeft:'140px'}}>Don't have an account? <Link to='/register' className='text-dark text-decoration-none'>Register</Link></span>
        
</form>

                </div>
            </div>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
/>
    </div>
  )
}

export default Login
