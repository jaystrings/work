import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from './hooks/useFetch'
import Spinner from './utilities/Spinner'

export default function Navlocker({isOpen, setOpen}) {

    const {error, data:categories, loading} = useFetch('https://ecommtest.onrender.com/categories')

    console.log(categories)

    return (
    <div className='position-fixed top-0 h-100'>

        <div className="p-4 bg-light h-100" style={{width:'24rem'}}>

            <div style={{marginTop:'5rem'}}>

                <Link to='/products' onClick={()=>setOpen(!isOpen)}>

                    <p className='text-dark'>products</p>
                </Link>

                <p>Categories</p>

                <Link to='/categories'>
                    {loading && <Spinner/>}
                    {error || (categories &&(
                        <>
                        {error && <p>{error.message}</p>}

                        {categories.map((category)=>(

                            <Link to={`/categories/${category.id}`} key={category.id}
                            
                            onClick={()=>setOpen(!isOpen)}
                            
                            >

                       <p className='text-sm mt-4 text-secondry'>{category.name}</p>
                        </Link>
                        ))}
                        
                        </>
                    ))}
                    <p className='text-sm mt-4 text-secondary'>category list</p>
                </Link>
                
            </div>

        </div>
      
    </div>
  )
}
