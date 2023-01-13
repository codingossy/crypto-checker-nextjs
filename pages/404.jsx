import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout/Layout'

const PageNotFound = () => {
  return (

    <section className='container mx-auto py-20'>
  
        <div className="flex items-center text-center justify-center flex-col">
          <h1 className='text-2xl capitalize'>are you lost baby girl? try they look road well next time</h1>
          <p className='text-xs text-blue-400'>It appears this page does not exist, please go back home.</p>
          <br />
          <Link href="/">
            <button className="--btn --btn-primary">Back to Home</button>
          </Link>
  
      </div>
    </section>

  )
}

export default PageNotFound