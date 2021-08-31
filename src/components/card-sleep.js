import React from 'react'

import PropTypes from 'prop-types'

import OutlineButtonDark from './outline-button-dark'
import styles from './card-sleep.module.css'

const CardSleep = (props) => {
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

CardSleep.defaultProps = {
  rootClassName: '',
  Header: 'Sleep',
}

CardSleep.propTypes = {
  rootClassName: PropTypes.string,
  Header: PropTypes.string,
}

export default CardSleep
