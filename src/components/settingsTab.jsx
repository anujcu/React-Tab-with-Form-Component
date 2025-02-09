import React from 'react'

const Settings = ({data,setData}) => {
    const {theme}=data;

    const handleDataChange=(e)=>{
        setData((prevState)=>({...prevState,
            theme:e.target.name
        }))
    }
  return (
    <div className='formWrapper'>
        <div className='formControlGroup'>
            <label className='formControlLabel labelHaveCheckbox'>
                <input type='radio' name='dark' className='inputCheckboxInlineLable'onChange={handleDataChange} checked={theme=='dark'}/>
                Dark
            </label>
            <label className='formControlLabel labelHaveCheckbox'>
                <input type='radio' name='light' className='inputCheckboxInlineLable' onChange={handleDataChange} checked={theme=='light'}/>
                Light
            </label>
        </div>
    </div>
  )
}

export default Settings