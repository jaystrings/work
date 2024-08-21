import React from 'react'

import HeroProducts from './HeroProducts'
import useFetch from '../hooks/useFetch'
import HomeCategory from './HomeCategory'
import FeatureProducts from './FeatureProducts'
export default function Home() {

    const {error, data, loading} = useFetch('https://ecommtest.onrender.com/products')
  return (
    <>
    
    <HeroProducts error = {error} data ={data} loading ={loading}/>
    <HomeCategory />
    <FeatureProducts error = {error} data ={data} loading = {loading}/>
    </>
  )
}
