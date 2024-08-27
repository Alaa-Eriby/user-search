import React, { useState } from 'react';
import './Card.css';
import avatar from "../../../public/imag/583231.png";
import searchIcon from "../../../public/imag/icon-search.svg";
import locationIcon from "../../../public/imag/icon-location.svg";
import blogIcon from "../../../public/imag/icon-website.svg";
import githubIcon from "../../../public/imag/icon-company.svg";
import unavailableIcon from "../../../public/imag/icon-twitter.svg";

const userInfo = {
  username: 'The Octocat',
  handle: '@octocat',
  bio: 'This profile has no bio',
  avatar: avatar,
  location: 'San Francisco',
  blog: 'https://github.blog',
  gethub: '@github',
  stats: [
    { label: 'Repos', value: 8 },
    { label: 'Followers', value: 3938 },
    { label: 'Following', value: 9 }
  ]
};

function Card() {
  const [searchInput, setSearchInput] = useState('');
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    if (searchInput.trim().toLowerCase() === userInfo.username.toLowerCase()) {
      setIsCardVisible(true);
      setErrorMessage('');  
    } else {
      setIsCardVisible(false);
      setErrorMessage('User not found. Please check the username and try again.'); 
    }
  };

  return (
    <div className="card">
      <div className="search-bar">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
        <input
          type="text"
          placeholder="Search GitHub username…"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}  

      {isCardVisible && (
        <div className='user-class'>
          <div className="user-details">
            <img src={userInfo.avatar} alt={userInfo.username} className="user-avatar" />
            <div className="info-container">
              <div className='username'>
                <h2>{userInfo.username}</h2>
                <p>Joined 25 Jan 2011</p>
              </div>
              <div className='handelall'>
                <p className="handel">{userInfo.handle}</p>
                <p className='bio'>{userInfo.bio}</p>
              </div>
            </div>
          </div>
          <div className="all">
            <div className="stats">
              {userInfo.stats.map((stat, index) => (
                <div key={index}>
                  <p>{stat.label}</p>
                  <p>{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="info">
              <div className="location">
                <p><img src={locationIcon} alt="Location Icon" className="info-icon" /> {userInfo.location}</p>
                <p><img src={blogIcon} alt="Blog Icon" className="info-icon" /> {userInfo.blog}</p>
              </div>
              <div className='blog'>
                <p><img src={unavailableIcon} alt="Unavailable Icon" className="info-icon" /> Not Available</p>
                <p><img src={githubIcon} alt="gethub Icon" className="info-icon" /> {userInfo.gethub}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
