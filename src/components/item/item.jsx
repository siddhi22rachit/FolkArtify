import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.product}</p>
      <div className="description">
        <ul>
          <li><Link to={`/${props.product.replace(/\s+/g, '-').toLowerCase()}`}>Show more</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Item;
