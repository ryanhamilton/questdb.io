import React from "react"
import * as RadixSlider from "@radix-ui/react-slider"
import style from "./style.module.css"

export type Props = {
  disabled?: boolean
  value: number
  min: number
  max: number
  onChange: (value: number) => void
  label?: string | ((value: number) => string)
} & (
  | {
      step: number
    }
  | {
      values: number[]
    }
)

export const Slider = ({ label, value, onChange, ...sliderProps }: Props) => {
  const labelText =
    typeof label === "function" ? label(value) : label ?? value.toString()

  return (
    <RadixSlider.Root
      value={[value]}
      {...sliderProps}
      aria-label={labelText}
      className={style.slider}
      onValueChange={([value]) => onChange(value)}
    >
      <RadixSlider.Track className={style.track}>
        <RadixSlider.Range className={style.range} />
      </RadixSlider.Track>
      <div className={style.thumbWrap}>
        <RadixSlider.Thumb data-label={labelText} className={style.thumb} />
      </div>
    </RadixSlider.Root>
  )
}
