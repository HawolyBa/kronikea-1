import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Banner = () => {
  return (
    <section className="story__banner">
      <div className="story__inner__banner">
        <div className="story__poster">
          <img src="https://images-na.ssl-images-amazon.com/images/I/91uix57X+jL.jpg" alt="poster"/>
        </div>
        <div className="story__title__bloc">
          <div className="story__title">
            <div className="story__author">
              <AccountCircleIcon/>
              <span>JK Rowling</span>
            </div>
            <h2>Harry Potter and the Prisoner of Azkaban</h2>
          </div>
          <div className="story__cta">
            <button className="story__button">Start Reading</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
