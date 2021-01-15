import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Cards from '../../../components/Story/Cards';
import Banner from '../../../components/Story/Banner'
import Details from '../../../components/Story/Details'

const Story = () => {
  return (
    <div className="story__page">
      <Banner/>
      {/* <section className="story__banner">
        <div className="story__title">
          <h2>Harry Potter and the Deathly Hollows</h2>
          <div className="author">
            <AccountCircleIcon/>
            <span>JK Rowling</span>
          </div>
        </div>
      </section> */}
      <section className="story__content">
        <div className="story__bloc story__details">
          <Details/>
          <span className="story__posted__on">
            Posted on Aug 13 2020
          </span>
          <div className="story__summary">
            <h4>Summary</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit, doloremque perferendis soluta at perspiciatis animi sapiente aperiam nemo porro beatae excepturi a quidem dolore et ut ex esse fuga.</p>
          </div>
        </div>
        <div className="story__bloc story__chapters">
          <h3 className="heading">Chapters</h3>
        </div>
        <div className="story__bloc story__characters">
          <h3 className="heading">Characters</h3>
          <Cards/>
        </div>
        <div className="story__bloc story__locations">
          <h3 className="heading">Locations</h3>
          <Cards/>
        </div>
      </section>
    </div>
  )
}

export default Story
