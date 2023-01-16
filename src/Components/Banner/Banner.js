import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constant'
import './Banner.css'

function Banner() {
    const [movie,setMovie]=useState()

    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
        })
    },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}
    className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.title :""}</h1>
            <div className="banner_button">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h2 className="description">{movie ? movie.overview :""}</h2>
        </div>
        <div className="shade_bottom"></div>
    </div>
  )
}

export default Banner