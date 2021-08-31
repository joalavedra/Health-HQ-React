import React from 'react'

import PropTypes from 'prop-types'

import OutlineButtonDark from './outline-button-dark'
import styles from './card-steps.module.css'

const CardSteps = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <span className={styles['text']}>{props.city}</span>
          <OutlineButtonDark button="Unfold"></OutlineButtonDark>
        </div>
      </div>
    </div>
  )
}

CardSteps.defaultProps = {
  city: 'Steps',
  rootClassName: '',
}

CardSteps.propTypes = {
  city: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CardSteps
