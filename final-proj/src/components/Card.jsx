import React from 'react';
import { Link } from 'react-router-dom';
import more from './more.png';

const Card = ({ id, title, description, upvotes, onUpvote }) => {
  return (
    <div className="Card">
      <Link to={'/post/' + id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="title">{title}</h2>
      <h3 className="description">{description}</h3>
      <button className="upvoteButton" onClick={() => onUpvote(id)}>
        👍 Upvotes: {upvotes}
      </button>
    </div>
  );
};

export default Card;