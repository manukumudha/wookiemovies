import React, { Fragment, useState } from 'react'

function Moviedisplay(props) {



    return (
        <Fragment>
            <div className="d-flex p-2 bd-highlight">Action</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Action') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">Crime</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Crime') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">Drama</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Drama') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">Biography</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Biography') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">History</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('History') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">Animation</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Animation') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">Adventure</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Adventure') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">Sci-Fi</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Sci-Fi') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>
            <div className="d-flex p-2 bd-highlight">Romance</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Romance') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">Thriller</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Romance') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">War</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('War') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>

            <div className="d-flex p-2 bd-highlight">Mystery</div>
            <div className="d-flex flex-row bd-highlight mb-3">
                {props.movies.map((movie, index) => (
                    movie.genres.includes('Mystery') && (<div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.backdrop} alt='Movie Poster' width="250px" ></img>
                    </div>)
                ))}
            </div>
        </Fragment>
    );
}

export default Moviedisplay