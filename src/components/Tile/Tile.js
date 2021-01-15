import React from 'react';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';

import PropTypes from 'prop-types';
import styles from './Tile.module.css';

const getImg = (number) =>{
  // eslint-disable-next-line default-case
  switch(number){
    case 1:
      return img1;
    case 2: 
      return img2;
    case 3: 
      return img3;
    case 4: 
      return img4;
    case 5: 
      return img5;
    case 6: 
      return img6;
  }
}
const Tile = ({number}) => (
  <div className={styles.Tile}>
    <img className={styles.TileImg} src={getImg(number)} alt='test'></img>
  </div>
);

Tile.propTypes = {};

Tile.defaultProps = {};

export default Tile;
