import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Movie Details</li>
              <li>Search</li>
              <li>Ratings</li>
              <li>Saved Movies</li>
              <li>Buy Movies</li>
            </ul>
            <p>This Movie Database Management System project was developed by Rakesh, Pannag, and Puneeth. The project aims to provide a user-friendly platform for users to explore, manage, and review movies. With features like user management, movie listings, browsing, and a review system, it offers a comprehensive solution for movie enthusiasts. The team collaborated to design an efficient and scalable system, focusing on delivering an intuitive user experience and robust functionality.</p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box'>
            <h3>movie database</h3>
            
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
