import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {

  const { register, handleSubmit, errors } = useForm();
  const [userInfo,setUserInfo]=useState();

  const onSubmit=(data,e)=>{
    setUserInfo(data)
    console.log(data);
    e.target.reset();
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-12 mb-2 display-6">Add New Contact</div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label>First Name</label>
              <br />
              <input style={{ width: "100%",border: errors.fname ? '1px solid red' : '1px solid green'  }} type="text" name='fname' 
              ref={register({required:"First Name is Required"})} />
              <div className='text-danger'>{errors.fname?.message}</div>
            </div>
            <div className="col-md-3">
              <label>Last Name</label>
              <br />
              <input style={{ width: "100%",border: errors.fname ? '1px solid red' : '1px solid green' }} type="text" name='lname' 
              ref={register({required:"Last Name is Required"})} />
              <div className='text-danger'>{errors.lname?.message}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3 mb-3">
              <label>Phone</label>
              <br />
              <input style={{ width: "100%",border: errors.fname ? '1px solid red' : '1px solid green' }} type="number" name='phone' 
              ref={register({required:"Phone No. is Required",minLength:{value:10,message:"10 digit number is required"},
              maxLength:{value:10,message:"10 digit number is required"}})} />
              <div className='text-danger'>{errors.phone?.message}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Email</label>
              <br />
              <input style={{ width: "100%",border: errors.fname ? '1px solid red' : '1px solid green' }} type="text" name='email' 
              ref={register({required:"Email is required",pattern:{value:/^\S+@\S+$/i,message:"This is not valid email"}})} />
              <div className='text-danger'>{errors.email?.message}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <button type='submit' className='btn btn-success'>save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
