import React, { useRef } from 'react'


const Title = ({name,title}) => {

  return (
    <>
    <div className="row">
      <div className=' col-10 mx-auto my-2 text-center'>
        <h1 className=' font-bold'> 
        {name} <strong className=' text-blue-400'>
          {title}
        </strong>
        </h1>
      </div>
    </div>
    </>
  )
}

export default Title