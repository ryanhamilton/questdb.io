import React from "react"
import { bytesWithSuffix } from "../../../../utils/bytes-with-suffix"
import { Slider, Props as SliderProps } from "../../../../components/Slider"
import { CPUPricing, StorageSpec } from "../prices"

type CPUSliderProps = {
  index: number
  values: CPUPricing[]
  onChange: (value: number) => void
}
export const CPUSlider = ({ index, values, onChange }: CPUSliderProps) => {
  const label = (value: number) => {
    const { cores, ramGB } = values[value]
    const { value: ram, suffix: ramSuffix } = bytesWithSuffix(ramGB, 3)
    return `${cores} cores (${ram} ${ramSuffix} RAM)`
  }

  const props: SliderProps = {
    value: index,
    onChange,
    label,
    min: 0,
    max: values.length - 1,
    step: 1,
  }

  return <Slider {...props} />
}

type StorageSliderProps = {
  index: number
  values: StorageSpec[]
  onChange: (value: number) => void
}

export const StorageSlider = ({
  index,
  values,
  onChange,
}: StorageSliderProps) => {
  const label = (value: number) => {
    const formatted = bytesWithSuffix(values[value].storageGB, 3)
    return `${formatted.value} ${formatted.suffix}`
  }

  const props: SliderProps = {
    value: index,
    onChange,
    label,
    min: 0,
    max: values.length - 1,
    step: 1,
  }

  return <Slider {...props} />
}

export default {}
