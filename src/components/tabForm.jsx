import Profile from './profileTab'
import Interests from './interestTab'
import Settings from './settingsTab'
import { useState } from 'react'
  const  TabForm = () => {
 
    //data for all tabs
  const [data,setData]=useState({
    name:'Anuj Kumar',
    age:'29',
    email:'anujcu@gmail.com',
    interests:['Coding','Reading'],
    theme:'dark'
  })
  //Tabs Config
  const tabs=[{
    name:'Profile',
    component:Profile,
    validate:()=>{
      const err={};
      if(!data.name || data.name.length <2){
        err.name='Name is not Valid';
      }
      if(!data.age || data.age<18){
        err.age='Age is not Valid';
      }
      if(!data.email || data.email<2){
        err.email='Email is not Valid';
      }
      setErrors(err);
      return err.name || err.age|| err.email?false:true;
    }
  },
  {
    name:'Interests',
    component:Interests,
    validate:()=>{
      const err={};
      if(data.interests.length<1){
        err.interests='Please select atleast one a Interest';
      }
      setErrors(err);
      return err.interests?false:true;
    }
  },
  {
    name:'Settings',
    component:Settings,
    validate:()=>{
      return true;
    }
  }];
  const [activeTab,setActiveTab]=useState(0);
  const ActiveTabComponent=tabs[activeTab].component;
  const [errors,setErrors]=useState({});

  const handleNextClick=()=>{
    if(tabs[activeTab].validate()){
      setActiveTab((prev)=>prev+1)
    }
  }
  const handlePrevClick=()=>{
    if(tabs[activeTab].validate()){
    setActiveTab((prev)=>prev-1)
    }
  }
  const handleSubmitClick=()=>{
        //make api call
        if(tabs[activeTab].validate()){
        alert('Form Submit Successfully')
        console.log(data);
        }
  }
  return (
    <>
    <h2>Tab Form Component</h2>
    <div className='tabContainer'>
      <div className='tabLinksWrapper'>
        {tabs.map((tab,index)=>(
          <button type='button' key={index} onClick={()=>tabs[activeTab].validate() && setActiveTab(index)} className={`tabLinks ${activeTab==index?'active':''}`}>{tab.name}</button>
        ))}
      </div>
      <div className='tabBody'>
        <ActiveTabComponent data={data} setData={setData} errors={errors}/>
      </div>
      <div className='TabFooter'>
        {
          activeTab!=0 &&
          <button className='nextPrevBtn' type='button' onClick={handlePrevClick}>Prev</button>
        }
        {
          activeTab!==tabs.length-1 &&
          <button className='nextPrevBtn' type='button' onClick={handleNextClick}>Next</button>
        }
        {
          activeTab===tabs.length-1 &&
          <button className='formSubmitButton' type='button' onClick={handleSubmitClick}>Submit</button>
        }
      </div>
    </div>
    </>
  )
}
export default TabForm
 