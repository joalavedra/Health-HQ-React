import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './status-invisible.module.css'

const StatusInvisible = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <span className={` ${styles['text']} ${projectStyles['button']} `}>
          {props.text}
        </span>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M506 384h6q52 0 90 38t38 90v8zM322 418q-24 48-24 94 0 88 63 151t151 63q46 0 94-24l-66-66q-16 4-28 4-52 0-90-38t-38-90q0-12 4-28zM86 182l54-54 756 756-54 54q-10-10-63-62t-81-80q-86 36-186 36-158 0-286-88t-184-232q22-52 69-115t91-97q-24-24-67-68t-49-50zM512 298q-40 0-78 16l-92-92q78-30 170-30 158 0 285 88t183 232q-48 118-146 202l-124-124q16-38 16-78 0-88-63-151t-151-63z"></path>
        </svg>
      </div>
    </div>
  )
}

StatusInvisible.defaultProps = {
  text: 'Invisible',
}

StatusInvisible.propTypes = {
  text: PropTypes.string,
}

export default StatusInvisible
