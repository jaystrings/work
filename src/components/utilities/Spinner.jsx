import React from 'react'

import { Blocks } from 'react-loader-spinner'

export default function Spinner() {
  return (
    <div className='d-flex justify-content-center align-items-center h-100'> 
    <Blocks
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />

    </div>
  )
}
