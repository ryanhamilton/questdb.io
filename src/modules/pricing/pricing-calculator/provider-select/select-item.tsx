import clsx from "clsx"
import React from "react"
import style from "./styles.module.css"
import { ProviderLogo } from "src/assets/types"

type Props = {
  img: ProviderLogo
  comingSoon: boolean
  selected: boolean
}

export const ProviderSelectItem = ({ img, comingSoon, selected }: Props) => (
  <div className={style.root}>
    <div className={clsx(style.image, { [style.selected]: selected })}>
      <img width={img.width} height={img.height} src={img.src} alt={img.alt} />
    </div>
    {comingSoon && <span className={style.comingSoon}>Coming soon</span>}
  </div>
)
