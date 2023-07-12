import React from "react"
import SvgImage from "../SvgImage"
import clsx from "clsx"
import styles from "./styles.module.css"
import { logos as logosManifest } from "../../assets/logos"

// importing SVGs individually to inject them into the DOM and avoid HTTP request
import yahoo from "../../../static/img/pages/customers/logos/yahoo.svg"
import airtel from "../../../static/img/pages/customers/logos/airtel.svg"
import airbus from "../../../static/img/pages/customers/logos/airbus.svg"
import aquis from "../../../static/img/pages/customers/cards/aquis.svg"
import central_group from "../../../static/img/pages/customers/logos/central_group.svg"
import weidmann from "../../../static/img/pages/customers/logos/weidmann.svg"
import tqs_integration from "../../../static/img/pages/customers/logos/tqs.svg"
import syndica from "../../../static/img/pages/customers/cards/syndica.svg"
import ca from "../../../static/img/pages/customers/logos/ca.svg"
import brightcom from "../../../static/img/pages/customers/logos/brightcom.svg"
import liveaction from "../../../static/img/pages/customers/logos/liveaction.svg"
import cloudera from "../../../static/img/pages/customers/logos/cloudera.svg"
import prediko from "../../../static/img/pages/customers/logos/prediko.svg"
import electric_era from "../../../static/img/pages/customers/logos/electric-era.svg"
import datron from "../../../static/img/pages/customers/cards/datron.svg"
import netapp from "../../../static/img/logos/netapp.svg"
import okx from "../../../static/img/pages/customers/logos/okx.svg"
import motion from "../../../static/img/pages/customers/logos/motion.svg"
import norlys_energy_trading from "../../../static/img/pages/customers/logos/norlys-energy-trading.svg"

const svgs = [
  {
    ...logosManifest["aquis-exchange"],
    svg: aquis,
    width: 110,
    height: 34,
    offset: 8,
  },

  {
    ...logosManifest.yahoo,
    svg: yahoo,
    width: 120,
  },

  {
    ...logosManifest.okx,
    svg: okx,
  },

  {
    ...logosManifest["copenhagen-atomics"],
    svg: ca,
  },

  {
    ...logosManifest.netapp,
    svg: netapp,
    width: 115,
  },

  {
    ...logosManifest.airbus,
    svg: airbus,
  },

  {
    ...logosManifest["norlys-energy-trading"],
    svg: norlys_energy_trading,
    width: 80,
    height: 40,
  },
  {
    ...logosManifest.cloudera,
    svg: cloudera,
    height: 40,
  },

  {
    ...logosManifest.airtel,
    svg: airtel,
    width: 100,
  },

  {
    ...logosManifest.weidmann,
    svg: weidmann,
    width: 110,
  },

  {
    ...logosManifest["central-group"],
    svg: central_group,
  },

  {
    ...logosManifest.motion,
    svg: motion,
    width: 90,
    height: 30,
  },

  {
    ...logosManifest.brightcom,
    svg: brightcom,
  },

  {
    ...logosManifest.prediko,
    svg: prediko,
  },

  {
    ...logosManifest.liveaction,
    svg: liveaction,
  },

  {
    ...logosManifest.syndica,
    svg: syndica,
    width: 100,
  },

  {
    ...logosManifest.electric_era,
    svg: electric_era,
    width: 140,
  },

  {
    ...logosManifest["tqs-integration"],
    svg: tqs_integration,
  },

  {
    ...logosManifest.datron,
    svg: datron,
    width: 120,
  },
]

export const Logos = ({ isDarkTheme }) => (
  <>
    {svgs.map(({ svg, width, height, alt, offset }, i) => (
      <div
        key={i}
        className={clsx(styles.logo, { [styles.logoDark]: isDarkTheme })}
        style={{ ...(offset !== undefined ? { marginTop: offset } : {}) }}
      >
        <SvgImage
          title={alt}
          key={i}
          image={React.createElement(svg, {
            alt,
            width,
            height,
          })}
        />
      </div>
    ))}
  </>
)
