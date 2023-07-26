import React from "react"
import { ProductCard } from "./product-card"
import style from "./styles.module.css"
import { products } from "./products"

export const Products = () => (
  <div className={style.root}>
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
)
