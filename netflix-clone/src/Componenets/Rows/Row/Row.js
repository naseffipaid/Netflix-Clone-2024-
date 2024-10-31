import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axios'; // Import axios
import movieTrailer from 'movie-trailer'; // Ensure this is imported
import YouTube from 'react-youtube'; // Ensure YouTube is imported
import "./row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(""); // Corrected casing for setter function

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        const fetchMovies = async () => { // Define the async function
            try {
                console.log(fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request);
                setMovie(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchMovies(); // Call the async function
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl(""); // Corrected casing for setter function
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
                    console.log(urlParams.get('v'));
                    setTrailerUrl(urlParams.get('v')); // Corrected casing for setter function
                })
                .catch((error) => console.log("Trailer not found", error)); // Added error handling for trailer fetching
        }
    };

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='rows_posters'>
                {movie?.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={index}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`} // Fixed curly brace issue
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
};

export default Row;