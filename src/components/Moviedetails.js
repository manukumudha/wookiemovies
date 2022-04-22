import React from 'react'

function Moviedetails(props) {
    console.log(props)
    return (
        <div>
            <div> cast :{props.cast}</div>
            <div> classification : {props.classification}</div>
            <div>  director: {props.director}</div>
            <div>imdb_rating: {props.imdb_rating}</div>
            <div>length: {props.length}</div>
            <div>overview: {props.overview}</div>
            <div>released_on: {props.released_on}</div>
            <div>slug: {props.slug}</div>
            <div> title: {props.title}</div>
        </div>
    )
}

export default Moviedetails