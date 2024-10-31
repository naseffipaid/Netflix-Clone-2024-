import React from 'react'
import Header from '../../Componenets/Header/Header'
import Footer from '../../Componenets/Footer/Footer'
import Banner from '../../Componenets/Banner/Banner'
import RowsList from "../../Componenets/Rows/RowsList/RowsList"


const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <RowsList/>
        <Footer/>
    </>
  )
}

export default Home