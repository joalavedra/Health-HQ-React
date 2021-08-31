import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-button-colour.module.css'

const OutlineButtonColour = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button className={` ${styles['button']} ${projectStyles['thqButton']} `}>
        {props.button}
      </button>
    </div>
  )
}

OutlineButtonColour.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

OutlineButtonColour.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineButtonColour
