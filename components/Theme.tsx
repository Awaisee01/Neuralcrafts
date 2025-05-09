import React from 'react'
import Toggle from "../app/Toggle"
const Theme = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white
     dark:bg-black text-black dark:text-white transition-all 300' >
      <div className='max-w-3xl text-center '>
        <h1>hello
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur ad tempora molestiae temporibus blanditiis perferendis, ipsum nulla, dolore magni, possimus ut maxime sed reprehenderit dignissimos quisquam? Praesentium, dicta ex?</p>
      </div>
      <Toggle/>
     </div>
  )
}

export default Theme