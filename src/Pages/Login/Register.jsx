import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { app } from '../../fireStoreConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const db=getFirestore(app)


const Register = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState(null);
    const [gender, setGender] = useState("");

    const handle = async(e) => {
        e.preventDefault();


        try{

            const storage=getStorage(app);
            const id=Math.floor(Math.random()*10000);
            const imageUpload=ref(storage,`images/${id}`);
            await uploadBytes(imageUpload,image);
            const imageUrl = await getDownloadURL(imageUpload);

            setName("");
            setEmail("");
            setCity("");
            setPassword("");
            setGender("");
            setImage(null);
            setPhone("");

       


        //add record 

        await addDoc(collection(db,"users"),{
            name:name,
            email:email,
            password:password,
            gender:gender,
            city:city,
            phone:phone,
            image:imageUrl
        })
        toast.success("record Add sucessfully...");
        }catch(err){
            console.log(err);
            return false;
        } 
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto" style={{ margin: '50px 0' }}>
                    <div className="card p-4 shadow mx-auto" style={{ width: '100%' }}>
                        <h1 align="center" className='mb-4'>Register</h1>
                        <form onSubmit={handle}>
                            <div className="mb-2">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email Id</label>
                                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputCity" className="form-label">City</label>
                                <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} value={city} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputFile" className="form-label">Choose File</label>
                                <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputGender" className="form-label">Gender</label><br />
                                <input type="radio" id="male" name="gender" value="male" onChange={(e) => setGender(e.target.value)} checked={gender === 'male'} /> Male
                                <input type="radio" id="female" name="gender" value="female" className="ms-3" onChange={(e) => setGender(e.target.value)} checked={gender === 'female'} /> Female
                            </div>
                            <button type="submit" className="btn btn-dark w-100 mb-4">Submit</button>
                            <span style={{ marginLeft: '140px', marginTop: '50px' }}>You already have an account? <Link to='/' className='text-dark text-decoration-none'>Login</Link></span>
                        </form>
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

export default Register;
