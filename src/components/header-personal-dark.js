import React from 'react'

import PropTypes from 'prop-types'

import styles from './header-personal-dark.module.css'

const HeaderPersonalDark = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['PersonalHeader']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <div className={styles['container1']}>
          <h1 className={styles['text']}>{props.heading1}</h1>
          <span className={styles['text1']}>{props.text}</span>
        </div>
      </div>
    </div>
  )
}

HeaderPersonalDark.defaultProps = {
  heading1: 'Heading',
  image_alt: 'image',
  text: 'Text',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

HeaderPersonalDark.propTypes = {
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeaderPersonalDark
