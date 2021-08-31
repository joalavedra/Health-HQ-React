import React from 'react'

import { Helmet } from 'react-helmet'

import OutlineButtonColour from '../components/outline-button-colour'
import projectStyles from '../style.module.css'
import styles from './landing-page.module.css'

const LandingPage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Healzier - Optimize Your Health</title>
        <meta
          name="description"
          content="Track your health performance from wearables, get insights on how to improve it and share it with your friends"
        />
        <meta property="og:title" content="Healzier - Optimize Your Health" />
        <meta
          property="og:description"
          content="Optimize every aspect of your health performance by connecting your wearables, analyzing your health and challenging your friends"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b0406427-48d3-4dfd-abbd-ede28ccb4af1/74d0382d-f46d-40f9-ac70-5d693f877bc2?org_if_sml=1"
        />
      </Helmet>
      <header className={styles['Header']}>
        <img
          alt="image"
          src="/playground_assets/logo%20500x500%20px%20(2)-1000h.png"
          className={styles['Image']}
        />
      </header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <h1 className={styles['text']}>
            <span className={styles['text01']}>
              Your personal
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text02']}>health HQ</span>
          </h1>
          <span className={styles['text03']}>
            <span>
              <span>
                Understand your body like never before.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                Meet Healzier a health optimization platform to track your
                wearables data and connect it with your friends.
              </span>
            </span>
          </span>
        </div>
        <div className={styles['container02']}>
          <OutlineButtonColour
            button="Join the Waitlist"
            rootClassName="rootClassName"
          ></OutlineButtonColour>
        </div>
        <div className={styles['container03']}>
          <img
            alt="image"
            src="/playground_assets/macbook%20pro-1000h.png"
            className={styles['image1']}
          />
        </div>
      </div>
      <div className={styles['container04']}>
        <div className={styles['Steps']}>
          <div className={styles['container05']}>
            <div className={styles['Step']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
              </svg>
              <div className={styles['container06']}>
                <h1 className={styles['text08']}>
                  <span>Track like never before</span>
                </h1>
                <span className={styles['text10']}>
                  <span>
                    Plug your health related information in your dashboard.
                  </span>
                </span>
              </div>
            </div>
            <div className={styles['Step1']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
              </svg>
              <div className={styles['container07']}>
                <h1 className={styles['text12']}>
                  <span>Secure and trustless</span>
                </h1>
                <span className={styles['text14']}>
                  <span>Get all your information in one single space.</span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className={styles['Step2']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
              </svg>
              <div className={styles['container08']}>
                <h1 className={styles['text17']}>Be your best version</h1>
                <span className={styles['text18']}>
                  <span>
                    Don&apos;t miss on insights that will push your longevity.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className={styles['Step3']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon7']}>
                <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
              </svg>
              <div className={styles['container09']}>
                <h1 className={styles['text21']}>
                  <span>Social is more fun!</span>
                </h1>
                <span className={styles['text23']}>
                  <span>
                    Get started now and share your profile with friends.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['container10']}>
          <nav className={styles['Nav']}>
            <a
              href="https://twitter.com/joalavedra"
              target="_blank"
              rel="noreferrer noopener"
              className={` ${styles['link']} ${projectStyles['thqLink']} `}
            >
              Contact us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
