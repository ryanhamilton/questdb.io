import React, { useMemo, useState } from "react"
import { formatPrice } from "../../../utils"
import type { Region, RegionKey } from "./prices"
import { cpuPrices, storagePrices, regions } from "./prices"
import { Dropdown } from "../../../components/Dropdown"
import { Section } from "../../../components/Section"
import style from "./style.module.css"
import { ProviderSelect } from "./provider-select"
import { ProviderKey } from "./provider-select/providers"
import { CPUSlider, StorageSlider } from "./slider"
import { bytesWithSuffix } from "../../../utils/bytes-with-suffix"
import { Toggle } from "../../../components/Toggle"
import { Link } from "@docusaurus/router"
import clsx from "clsx"

type RegionSelectProps = {
  value: RegionKey
  onChange: (value: RegionKey) => void
  regions: readonly Region[]
}

const RegionSelect = ({ value, onChange, regions }: RegionSelectProps) => (
  <Dropdown<RegionKey>
    value={value}
    onChange={onChange}
    values={regions.map(({ key, label, available }) => ({
      label: available
        ? `${label} (${key})`
        : `${label} (${key}) (Coming soon)`,
      value: key,
      disabled: !available,
    }))}
  />
)

type RateUnit = "hour" | "month"

export const PlanCalculator = () => {
  const [region, setRegion] = useState<RegionKey>("us-east-2")
  const provider: ProviderKey = "aws"

  const plan = useMemo(
    () => ({
      cpu: cpuPrices.filter((plan) => plan.region === region),
      storage: storagePrices.filter((plan) => plan.region === region),
    }),
    [region],
  )

  const [cpuSliderIndex, setCPUSliderIndex] = useState(0)
  const [storageSliderIndex, setStorageSliderIndex] = useState(0)

  const selectedCPU = plan.cpu[cpuSliderIndex]
  const selectedStorage = plan.storage[storageSliderIndex]

  const price =
    selectedCPU.price === "contact" || selectedStorage.price === "contact"
      ? "contact"
      : selectedCPU.price + selectedStorage.price

  const equivalentStorage = bytesWithSuffix(selectedStorage.storageGB * 5, 3)

  const [pricePer, setPricePer] = useState<RateUnit>("hour")

  const priceMultiplier = pricePer === "hour" ? 1 : 730
  const priceFormattingOptions: Intl.NumberFormatOptions =
    pricePer === "hour"
      ? { minimumFractionDigits: 3 }
      : { maximumFractionDigits: 0 }

  return (
    <>
      <Section.Title size="small" center className={style.title}>
        Explore QuestDB Cloud pricing options
      </Section.Title>

      <article className={style.card}>
        <ProviderSelect
          selectedProvider={provider}
          className={style.providerSelect}
        />

        <div className={clsx(style.labelledInput, style.regionsSelect)}>
          Region
          <RegionSelect value={region} onChange={setRegion} regions={regions} />
        </div>

        <div className={style.sliders}>
          <div className={style.labelledInput}>
            Instance
            <CPUSlider
              index={cpuSliderIndex}
              values={plan.cpu}
              onChange={(value) => setCPUSliderIndex(value)}
            />
          </div>

          <div className={style.labelledInput}>
            Storage
            <StorageSlider
              index={storageSliderIndex}
              values={plan.storage}
              onChange={(value) => setStorageSliderIndex(value)}
            />
          </div>
        </div>

        <div className={style.result}>
          {price === "contact" ? (
            <hgroup>
              <h2>
                <Link to="/enterprise/contact">Contact us</Link>
              </h2>
              <p>for custom pricing</p>
            </hgroup>
          ) : (
            <>
              <h2>
                {formatPrice(price * priceMultiplier, priceFormattingOptions)}
              </h2>
              <div className={style.toggle}>
                <span>per</span>
                <Toggle
                  options={["hour", "month"]}
                  selected={pricePer}
                  onClick={(value) => setPricePer(value)}
                />
              </div>
            </>
          )}
        </div>

        <div className={style.compressionInfo}>
          Equivalent to{" "}
          <span className={style.accent}>
            {equivalentStorage.value} {equivalentStorage.suffix}
          </span>{" "}
          of uncompressed storage
          {selectedStorage.price === "contact" ? (
            "."
          ) : (
            <>
              , saving up to{" "}
              <span className={style.accent}>
                {formatPrice(
                  selectedStorage.price * 4 * priceMultiplier,
                  priceFormattingOptions,
                )}
                /{pricePer}.
              </span>
            </>
          )}{" "}
          <Link to="/enterprise">Need more?</Link>
        </div>
      </article>
    </>
  )
}
