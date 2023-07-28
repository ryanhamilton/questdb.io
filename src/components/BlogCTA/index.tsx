import ctaCss from "./cta.module.css"
import React from "react"
import Button from "@theme/Button"

export const BlogCTA = () => (
  <div className={ctaCss.button}>
    <Button variant="tertiary" newTab={false}>
              Start building now
    </Button>
  </div>
)
