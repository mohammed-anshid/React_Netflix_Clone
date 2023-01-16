import React, { useEffect, useState } from 'react'
import {imageUrl} from '../../constants/constant'
import axios from '../../axios'
import './RowPost.css';

function RowPost(props) {
    const [movies ,setMovies] = useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        })
    },)
  return (
    <div className='row' >
        <h2>{props.title}</h2>
        <div className="posters">
            {
                movies.map((obj)=>
                    <img className={ props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Posters" />
                )
            }
            
        </div>
    </div>
  )
}

export default RowPost