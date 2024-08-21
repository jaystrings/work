import React from 'react'
import { Button, Carousel, CarouselItem, Image } from 'react-bootstrap'

import Spinner from '../utilities/Spinner'
import { Link } from 'react-router-dom'

export default function HeroProducts({error, data, loading}) {

    const bannerProduct = data.filter((product)=>product.price>=500)
    console.log(bannerProduct)
  return(
    <>
    
    {loading && <Spinner />}

    {error || (data && (

        <>
        <Carousel>

            {bannerProduct.slice(0,3).map((banner)=>(
                <CarouselItem key={banner.id}>

                    <Image className = 'd-block w-100' src={banner.images[2]} 
                    alt={banner.title}
                    style={{height:'600px'}}/>

                    <Carousel.Caption>

                        <h1 className='display-3'>{banner.title}</h1>

                        <Link to={`/products/${banner.id}`}>

                            <Button
                            
                            variant='dark'
                            size='lg'
                            className='border-none rounded-0'>

                                Buy now
                            </Button>

                        </Link>
                    </Carousel.Caption>

                </CarouselItem>
            ))}
        </Carousel>

        </>
    ))}
    
    </>

  )

}