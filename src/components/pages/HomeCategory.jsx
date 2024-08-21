import React from 'react'
import useFetch from '../hooks/useFetch'
import { Button, Carousel, CarouselItem, Container, Image } from 'react-bootstrap'
import Spinner from '../utilities/Spinner'
import { Link } from 'react-router-dom'

export default function HomeCategory() {

    const {error, data:categories, loading} = useFetch('https://ecommtest.onrender.com/categories')

    const bannerCategory = categories.filter((category)=> category.name === 'Fashion' || category.name === 'Earpiece')
    console.log(bannerCategory)
  return (
  <Container className='mt-5'>

    {loading && <Spinner />}

    {error || (categories && 

        <>
        {error && <p>{error.message}</p>}

        <Carousel>

            {bannerCategory.slice(0,3).map((banner)=>(
                <CarouselItem key={banner.id}>

                    <Image className = 'd-block w-100' src={banner.image} 
                    alt={banner.title}
                    style={{height:'600px'}}/>

                    <Carousel.Caption>

                        <h1 className='display-3'>{banner.name}</h1>

                        <Link to={`/categories/${banner.id}`}>

                            <Button
                            
                            variant='dark'
                            size='lg'
                            className='border-none rounded-0'>

                                See more
                            </Button>

                        </Link>
                    </Carousel.Caption>

                </CarouselItem>
            ))}
        </Carousel>
        
        </>
    )}
  </Container>
  )
}
