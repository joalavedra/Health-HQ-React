import React from 'react'

import PropTypes from 'prop-types'

import OutlineButtonDark from './outline-button-dark'
import styles from './card-heart.module.css'

const CardHeart = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <span className={styles['text']}>{props.Header}</span>
          <OutlineButtonDark button="Unfold"></OutlineButtonDark>
        </div>
      </div>
    </div>
  )
}

CardHeart.defaultProps = {
  rootClassName: '',
  Header: 'Heart rate',
}

CardHeart.propTypes = {
  rootClassName: PropTypes.string,
  Header: PropTypes.string,
}

export default CardHeart
