import React from 'react'
import SideBar from './SideBar'
import Upload from './Upload'
import './Upload.css'
import img from '../img.png'

function Screen() {
  return (
  
        <div className='relative' >
<div className='absolute'>
    <div className='fixed top-0 h-screen'>

        <SideBar/>
    </div>
</div>

<div className=' sm:ml-[300px] ml-[10px]   lg:ml-[320px] '>

<div className='flex justify-between mb-5'>

<div className='heading'>
    Upload Csv
</div>
<div className='flex  '>
    <div className='mt-1'  >
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
<path d="M16.3862 13.3255V9.20108C16.3862 5.5011 14.2012 2.38423 11.2412 1.44687C10.9482 0.59807 10.2322 0 9.38623 0C8.54023 0 7.82423 0.59807 7.53123 1.44687C4.57123 2.38538 2.38623 5.5011 2.38623 9.20108V13.3255L0.679231 15.2887C0.586189 15.3954 0.512401 15.5221 0.462116 15.6617C0.411831 15.8012 0.386041 15.9508 0.386232 16.1019V18.4022C0.386232 18.7072 0.491588 18.9997 0.679125 19.2154C0.866661 19.4311 1.12102 19.5523 1.38623 19.5523H17.3862C17.6514 19.5523 17.9058 19.4311 18.0933 19.2154C18.2809 18.9997 18.3862 18.7072 18.3862 18.4022V16.1019C18.3864 15.9508 18.3606 15.8012 18.3103 15.6617C18.2601 15.5221 18.1863 15.3954 18.0932 15.2887L16.3862 13.3255ZM16.3862 17.252H2.38623V16.578L4.09323 14.6148C4.18627 14.5081 4.26006 14.3814 4.31035 14.2419C4.36063 14.1023 4.38642 13.9527 4.38623 13.8016V9.20108C4.38623 6.03016 6.62923 3.45041 9.38623 3.45041C12.1432 3.45041 14.3862 6.03016 14.3862 9.20108V13.8016C14.3862 14.1076 14.4912 14.3997 14.6792 14.6148L16.3862 16.578V17.252ZM9.38623 23.0027C10.0055 23.0036 10.6097 22.7826 11.1147 22.3703C11.6198 21.9581 12.0006 21.3751 12.2042 20.7024H6.56823C6.77189 21.3751 7.15271 21.9581 7.65774 22.3703C8.16277 22.7826 8.76693 23.0036 9.38623 23.0027Z" fill="black"/>
</svg>
    </div>
    <div className='w-[30px] ml-2 mr-3 h-[30px] rounded-full ' >
<img src={img} alt='profile' className='w-[30px] h-[30px] rounded-full object-cover' />

    </div>
</div>
</div>


<div className=''>

<Upload/>
</div>
</div>
        </div>
    
  )
}

export default Screen