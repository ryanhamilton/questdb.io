import React, { useEffect, useState } from "react"
import { Section } from "../Section"
import styles from "./styles.module.css"
import Marquee from "react-fast-marquee"
import useThemeContext from "@theme/hooks/useThemeContext"
import { Logos } from "./logos"
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize"

const Customers = () => {
  const { isDarkTheme } = useThemeContext()
  const [play, setPlay] = useState(false)

  const windowSize = useWindowSize()

  useEffect(() => {
    setPlay(windowSize !== windowSizes.mobile)
  }, [windowSize])

  return (
    <Section noGap className={styles.section}>
      <div onClick={() => setPlay(!play)}>
        <Marquee
          gradientColor={isDarkTheme ? [33, 34, 44] : [255, 255, 255]}
          play={play}
          className={styles.marquee}
        >
          <Logos isDarkTheme={isDarkTheme} onClick={() => setPlay(!play)} />
        </Marquee>
      </div>
    </Section>
  )
}

export default Customers
