import React , {useState, useEffect} from 'react'
import "./banner.css"
import axios from '../../utils/axios'
import requests from '../../utils/requests'

const Banner = () => {
    const [movie, setMovie] = useState({})
    useEffect(() =>{
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals)
                console.log(request.data.results)
                setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)
                ]);
            } catch (error) {
                console.log("error", error)
            }
            
        })()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }
  return (
    <div 
       className='banner'
       style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://images.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundRepeat: "no-repeat"
       }}
    >
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button play'>Play</button>
                <button className='banner_button'>My list</button>
            </div>
            <h1 className='banner_discription'>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className='banner_fadeBottom' />

    </div>
  )
}

export default Banner;