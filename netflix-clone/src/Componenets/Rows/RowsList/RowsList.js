import React from 'react'
import Row from "../Row/Row"
import requests from '../../../utils/requests';

const RowsList = () => {
  return (
    <>
        <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
        />
        <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            // isLargeRow={true}
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Tv Shows" fetchUrl={requests.fetchTvShow}/>
        <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries}/>
        <Row title="Commedy" fetchUrl={requests.fetchComedyMovies}/>

        
    </>
  )
}

export default RowsList;