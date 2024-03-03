import React from 'react'

import {BiTimeFive} from 'react-icons/bi'
import mslogo from '../../assets/mslogo.png';


const Data=[
  {
     id:1 ,
     image:mslogo ,
     title :"Web Developer" ,
     time :"Now" ,
     location :"Canada" ,
     desc:"Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ,
     company :"Microsoft"

  },
  {
    id:2 ,
    image:mslogo ,
    title :"Web Developer" ,
    time :"Now" ,
    location :"Canada" ,
    desc:"Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ,
    company :"Microsoft"

 },
 {
  id:3 ,
  image:mslogo ,
  title :"Web Developer" ,
  time :"Now" ,
  location :"Canada" ,
  desc:"Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ,
  company :"Microsoft"

},
{
  id:4 ,
  image:mslogo ,
  title :"Web Developer" ,
  time :"Now" ,
  location :"Canada" ,
  desc:"Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ,
  company :"Microsoft"

},
{
  id:5 ,
  image:mslogo ,
  title :"Web Developer" ,
  time :"Now" ,
  location :"Canada" ,
  desc:"Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ,
  company :"Microsoft"

},
{
  id:6 ,
  image:mslogo ,
  title :"Web Developer" ,
  time :"Now" ,
  location :"Canada" ,
  desc:"Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ,
  company :"Microsoft"

},
{
  id:6 ,
  image:mslogo ,
  title :"Web Developer" ,
  time :"Now" ,
  location :"Canada" ,
  desc:"Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ,
  company :"Microsoft"

},
{
  id:6 ,
  image:mslogo ,
  title :"Web Developer" ,
  time :"Now" ,
  location :"Canada" ,
  desc:"Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" ,
  company :"Microsoft"

},





]


const Jobs = () => {
  return (
    <div>

      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
       
       {
        Data.map(({id , image , title , time , location  , desc , company })=>{
          return (
            <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor
            shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
     
             <span className='flex justify-between items-center gap-4 '>
               <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
               
               <span className='flex items-center text-[#ccc] gap-1'>
               <BiTimeFive/>{time}
               </span>
               
             </span>
     
             <h6 className='text-[#ccc]'>{location}</h6>
             <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]  group-hover:text-white '>
              {desc}
             </p>
     
             <div className='company flex items-center gap-2'>
               <img src={image} alt="logo" className='w-[10%]' />
               <span className='text-[14px] py-[1rem] block group-hover:text-white' >{company}</span>
             </div>
     
             <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
             font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white  ' >Apply Now</button>
     
            </div>

          )
        })
       }
     


      </div>


    </div>
  )
}

export default Jobs