import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderPersonalDark from '../components/header-personal-dark'
import CardHeart from '../components/card-heart'
import CardSleep from '../components/card-sleep'
import CardSteps from '../components/card-steps'
import CardCreate from '../components/card-create'
import styles from './example-page.module.css'

const ExamplePage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Example Page - Healzier - Optimize Your Health</title>
        <meta
          name="description"
          content="Track your health performance from wearables, get insights on how to improve it and share it with your friends"
        />
        <meta
          property="og:title"
          content="Example Page - Healzier - Optimize Your Health"
        />
        <meta
          property="og:description"
          content="Optimize every aspect of your health performance by connecting your wearables, analyzing your health and challenging your friends"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b0406427-48d3-4dfd-abbd-ede28ccb4af1/74d0382d-f46d-40f9-ac70-5d693f877bc2?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['container1']}>
        <HeaderPersonalDark rootClassName="rootClassName"></HeaderPersonalDark>
      </div>
      <div className={styles['container2']}>
        <CardHeart rootClassName="rootClassName1"></CardHeart>
        <CardSleep rootClassName="rootClassName1"></CardSleep>
      </div>
      <div className={styles['container3']}>
        <CardSteps rootClassName="rootClassName1"></CardSteps>
        <CardCreate rootClassName="rootClassName1"></CardCreate>
      </div>
    </div>
  )
}

export default ExamplePage
