import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-button-grey.module.css'

const OutlineButtonGrey = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['thqButton']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

OutlineButtonGrey.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

OutlineButtonGrey.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineButtonGrey
