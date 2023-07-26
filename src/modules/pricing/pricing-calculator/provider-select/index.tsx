import React from "react"
import { ProviderKey, providers } from "./providers"
import style from "./styles.module.css"
import { ProviderSelectItem } from "./select-item"
import clsx from "clsx"

type Props = {
  selectedProvider: ProviderKey
  className?: string
}

export const ProviderSelect = ({ selectedProvider, className }: Props) => (
  <div className={clsx(style.optionContent, className)}>
    {providers.map(({ key, img, available }) => (
      <ProviderSelectItem
        key={key}
        img={img}
        comingSoon={!available}
        selected={key === selectedProvider}
      />
    ))}
  </div>
)
