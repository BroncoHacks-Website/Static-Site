import { useState } from 'react';
import PropTypes from 'prop-types';
import data from '../Assets/Profile/2024winners.js';
import '../styles/Winners.css';

const Card = ({ place, title, description, team, members, imagePath }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className={`place ${place === 1 ? 'first' : place === 2 ? 'second' : 'third'}`}>
          {place === 1 ? '1st' : place === 2 ? '2nd' : '3rd'}
        </h2>
        <div className="pic-placeholder">
            <img src={imagePath} alt="Winner Photo"/>
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <h4 className="team">{team}</h4>
        <ul className="members">
          {members.map((member, index) => (
            <li key={index} className="member">
              <span>{member}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  place: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired,
};

const Winners = () => {
  const [category, setCategory] = useState("Web Development");

  const nextCategory = () => {
    const categories = Object.keys(data);
    const currentIndex = categories.indexOf(category);
    const nextIndex = (currentIndex + 1) % categories.length;
    setCategory(categories[nextIndex]);
  };

  const prevCategory = () => {
    const categories = Object.keys(data);
    const currentIndex = categories.indexOf(category);
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
    setCategory(categories[prevIndex]);
  };

  return (
    <div className="winner-container">
      <h1 className="main-title">Spring 2024 Winners</h1>
      <h2 className="category-title">{category}</h2>
      <div className="navigation-container">
        <button onClick={prevCategory} className="nav-button">&#8592;</button>
        <div className="card-container">
          {data[category].map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <button onClick={nextCategory} className="nav-button">&#8594;</button>
      </div>
    </div>
  );
};

export default Winners;