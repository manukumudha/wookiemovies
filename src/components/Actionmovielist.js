import React, { Fragment } from 'react';
import Moviedetails from './Moviedetails';


const Actionmovielist = (props) => {
    console.log(props)



    return (
        <Fragment>
            <div className="d-flex p-2 bd-highlight">Action</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    <div className='image-container d-flex justify-content-start m-3' key={index} >
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                        <div className="d-flex flex-row bd-highlight mb-3">
                            {/* <Moviedetails movie={movie} /> */}
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Actionmovielist;