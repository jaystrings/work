import React,  {useRef} from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import Spinner from '../utilities/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


export default function FeatureProducts({error, data, loading}) {

    const scrollRef = useRef()

    const scroll = (direction)=>{

        const {current} = scrollRef

        direction === 'left'
        ? (current.scrolleft -=500) 
        : (current.scrolleft +=500)
    }

    const featureproducts = data.filter ((product)=>product.price >=700 && product.price <=5000)
    console.log(featureproducts)
  return (
    <>
    <Container  className='mt-5 p-3'/>

    <h6 className='mt-5'>Featured Products</h6>

    {loading && <Spinner />}

    {error || (featureproducts && (
        <>
        {error && <p>{error.message}</p>}

        <div className='position-relative'>
            <Container ref={scrollRef} style={{scrollBehavior:'smooth'}} className='d-flex overflow-scroll scrollBody'>

                {featureproducts.slice(0,9).map((product)=>(
                    <div key={product.id}>

                        <Link to={`/products/${product.id}`}>

                            <div style={{width:'270px', height:'350px'}}>

                                <Image src = {product.images[1]}
                                
                                alt = {product.title}

                                className  = 'w-100 h-100 '/>
                            </div>
                        </Link>

                        <p className='text-dark'>{product.title}</p>
                        <p>{product.price}</p>
                        <Button 
                        
                        variant='outline-dark'
                        className='border-none rounded-2'>

                            Add to Cart

                        </Button>
                    </div>
                ))}

            </Container>

            <div className='d-none d-md-block w-100 position-absolute top-50'>

                <div className='d-flex justify-content-between align-items-center'>

                    <AiOutlineArrowLeft size= '2rem' style={{cursor:'pointer'}}/>

                    <AiOutlineArrowRight size = '2rem' style ={{cursor:'pointer'}}/>


                </div>


            </div>



        </div>
        
        </>
    ))}

    </>
  )
}
