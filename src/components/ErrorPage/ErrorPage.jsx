import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../assets/error-7-xxl.png'
const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    
        <div className='text-center'>
          <img className='w-25 mx-auto' src={errorImg} alt="" />
          <h2 className=''>
            <span>Error </span>
            {status || 404}!!
          </h2>
          <p className=''>
            {error?.message}
          </p>
          <Link to='/' className=''>
            Back to Home
          </Link>
        </div>
      
  )
}

export default ErrorPage
