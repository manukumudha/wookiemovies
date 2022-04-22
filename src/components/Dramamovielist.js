import React, { Fragment } from 'react';
import Moviedetails from './Moviedetails';


const Dramamovielist = (props) => {
    console.log(props)



    return (
        <Fragment>
            <div className="d-flex p-2 bd-highlight">Drama</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                        {/* <Moviedetails movie={movie} /> */}
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Dramamovielist;