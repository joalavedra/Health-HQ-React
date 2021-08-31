import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './status-visible.module.css'

const StatusVisible = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <span className={` ${styles['text']} ${projectStyles['button']} `}>
          {props.text}
        </span>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
        </svg>
      </div>
    </div>
  )
}

StatusVisible.defaultProps = {
  rootClassName: '',
  text: 'Visible',
}

StatusVisible.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default StatusVisible
