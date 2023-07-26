import React from "react"
import style from "./style.module.css"
import clsx from "clsx"

export type Props<T> = {
  options: T[]
  selected?: T
  onClick: (value: T) => void
}

export const Toggle = <T extends string>({
  options,
  selected,
  onClick,
  ...props
}: Props<T>) => (
  <fieldset className={clsx(style.root)} {...props}>
    {options.map((option, index) => {
      const active = selected === option

      return (
        <div
          className={clsx(style.option, { [style.active]: active })}
          key={index}
          onClick={() => onClick(option)}
        >
          <input type="radio" checked={active} className={style.input} />
          <label className={style.label}>{option}</label>
        </div>
      )
    })}
  </fieldset>
)
