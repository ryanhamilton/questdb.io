import clsx from "clsx"
import React from "react"

import styles from "./styles.module.css"

type Props = {
  alt: string
  height?: number
  margin: boolean
  shadow: boolean
  small: boolean
  src: string
  title?: string
  width?: number
  forceTheme?: "light" | "dark"
}

const Screenshot = ({
  alt,
  height,
  margin,
  shadow,
  small,
  src,
  title,
  width,
  forceTheme,
}: Props) => (
  <figure>
    <img
      alt={alt}
      className={clsx(styles.image, {
        [styles.margin]: margin,
        [styles.shadow]: shadow,
        [styles.small]: small,
        [styles.title]: title != null,
        [styles.forceDark]: forceTheme === "dark",
        [styles.forceLight]: forceTheme === "light",
      })}
      height={height}
      src={src}
      width={width}
      loading="lazy"
    />
    {title != null && (
      <figcaption className={styles.caption}>{title}</figcaption>
    )}
  </figure>
)

Screenshot.defaultProps = {
  margin: true,
  shadow: true,
  small: false,
}

export default Screenshot
