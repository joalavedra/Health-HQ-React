import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-button-dark.module.css'

const OutlineButtonDark = (props) => {
  return (
    <div className={styles['container']}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['thqButton']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

OutlineButtonDark.defaultProps = {
  text: 'Text',
  button1: 'Button',
  button: 'Button',
}

OutlineButtonDark.propTypes = {
  text: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineButtonDark
