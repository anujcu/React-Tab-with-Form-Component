import React from 'react'

const Interests = ({data,setData,errors}) => {
    const {interests}=data;
    const handleDataChange=(e,name)=>{
        setData(prevState=>({
            ...prevState,
            interests:e.target.checked
            ?[...prevState.interests,e.target.name]
            :prevState.interests.filter((interest)=>interest!==e.target.name)
        }))
    }
  return (
    <div className='formWrapper'>
        <p>Interests Tab Component</p>
        <div className='formControlGroup'>
            <label className='formControlLabel labelHaveCheckbox'>
                <input type='checkbox' name='Coding' onChange={handleDataChange} className='inputCheckboxInlineLable' checked={interests.includes('Coding')}/>
                Coding
            </label>
        </div>
        <div className='formControlGroup'>
            <label className='formControlLabel labelHaveCheckbox'>
                <input type='checkbox' name='Reading' onChange={handleDataChange} className='inputCheckboxInlineLable' checked={interests.includes('Reading')}/>
                Reading
            </label>
        </div>
        <div className='formControlGroup'>
            <label className='formControlLabel labelHaveCheckbox'>
                <input type='checkbox' name='JavaScript' onChange={handleDataChange} className='inputCheckboxInlineLable' checked={interests.includes('JavaScript')}/>
                JavaScript
            </label>
        </div>
        {errors.interests && <span className='errorInput'>{errors.interests}</span>}
    </div>
  )
}

export default Interests