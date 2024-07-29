import React from 'react'
import './homepage.scss'
import SearchBar from '../../components/searchbar/SearchBar'
const HomePage = () => {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>
            Let us help you find your Dream Place
          </h1>
          <p>
            <a href='/' className='space-after'>
            <b>Aashiyana</b>  
            </a>
            helps you to find your dream house and make it a HOME. We provide you with options in all the ranges so that achieving your goal becomes an easier task.
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imageContainer'>
        <img src='/bg.png' alt="" />
      </div>
    </div>
  )
}

export default HomePage