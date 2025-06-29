import React from 'react'

function Cards({username = "Uchiha", post = "genin"}) {
   // console.log(props);
    
  return (
    <div>
       <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl roun" alt="" src="https://i.redd.it/pi72mr134gyx.png" />
  </div>
  <div className="flex">
    {username} {post}
    
    <span> legends never die</span> 

 

    <span className="flex">
       
      
    </span>
  </div>
</div>
    </div>
  )
}

export default Cards