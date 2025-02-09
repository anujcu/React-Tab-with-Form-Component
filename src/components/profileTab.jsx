import React from 'react'

const Profile = ({data,setData,errors}) => {
const {name,email,age}=data;

//update value in state where that is mainting in parent component
const handleProfileDataChange=(e,item)=>{
    setData(prevState=>({...prevState,
        [item]:e.target.value
    }))
}
  return (
    <div className='formWrapper'>
        <p>Update Profile Details</p>
        <div className='formControlGroup'>
            <label className='formControlLabel'>Name</label>
            <input type='text' placeholder='Name' value={name} onChange={(e)=>handleProfileDataChange(e,'name')} className='formControlInput'/>
            {errors.name && <span className='errorInput'>{errors.name}</span>}
        </div>
        <div className='formControlGroup'>
            <label className='formControlLabel'>Age</label>
            <input type='number' placeholder='Name' value={age} onChange={(e)=>handleProfileDataChange(e,'age')} className='formControlInput'/>
            {errors.age && <span className='errorInput'>{errors.age}</span>}
        </div>
        <div className='formControlGroup'>
            <label className='formControlLabel'>Gender</label>
            <input type='email' placeholder='Name'value={email} onChange={(e)=>handleProfileDataChange(e,'email')} className='formControlInput'/>
            {errors.email && <span className='errorInput'>{errors.email}</span>}
        </div>
        
    </div>
  )
}

export default Profile