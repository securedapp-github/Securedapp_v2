import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BrandLogos from '../components/brand-logos';

const ProductHero = ({name, title, image}) => (
  <div>
    <div>
        <div>
            <p>{name}</p>
            <h3>{title}</h3>
        </div>
        <div>
            <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            </div>
            <p>Trusted by 100+ companies</p>
            <button>Get started<FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>
    <img width="300px" src={image}></img>
    <BrandLogos/>
  </div>
);

export default ProductHero;
