import React from 'react'

import PropTypes from 'prop-types'

import OutlineButtonGrey from './outline-button-grey'
import styles from './card-create.module.css'

const CardCreate = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <OutlineButtonGrey
            button="Create Card"
            rootClassName="rootClassName"
          ></OutlineButtonGrey>
        </div>
      </div>
    </div>
  )
}

CardCreate.defaultProps = {
  rootClassName: '',
}

CardCreate.propTypes = {
  rootClassName: PropTypes.string,
}

export default CardCreate
