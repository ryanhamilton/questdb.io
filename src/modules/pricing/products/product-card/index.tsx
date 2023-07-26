import React from "react"
import style from "./styles.module.css"
import type { Label, ProductInfo } from "../products"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import buttonStyle from "../../../../theme/Button/styles.module.css"

const StyledLabel = ({
  labels,
  className,
}: {
  labels: Label[]
  className: string
}) => (
  <div className={className}>
    {labels.map((label, index) => (
      <span
        key={index}
        className={clsx({
          [style.emphasized]:
            (typeof label !== "string" && label.emphasized) ?? false,
        })}
      >
        {typeof label === "string" ? label : label.text}
      </span>
    ))}
  </div>
)

export const ProductCard = (product: ProductInfo) => (
  <article className={style.root}>
    {typeof product.highlight === "string" && (
      <div className={style.highlight}>{product.highlight}</div>
    )}

    <header className={style.heading}>
      <h2 className={style.title}>{product.title}</h2>
      <span className={style.subtitle}>{product.subtitle}</span>
    </header>

    <div className={style.pricingLabels}>
      <StyledLabel
        className={style.pricingLabel}
        labels={product.pricingLabel}
      />

      <StyledLabel
        className={style.pricingSublabel}
        labels={product.pricingSublabel}
      />
    </div>

    <ul className={style.specs}>
      {product.specs.map((spec, index) => (
        <li key={index}>{spec}</li>
      ))}
    </ul>

    <div className={style.cta}>
      <Link
        to={product.url}
        className={clsx(
          buttonStyle.button,
          buttonStyle["button--primary"],
          buttonStyle["button--uppercase"],
        )}
      >
        {product.ctaLabel}
      </Link>
    </div>
  </article>
)
