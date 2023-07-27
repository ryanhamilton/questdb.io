import React from "react"
import customFields from "../../../config/customFields"
import { BookADemo } from "../../book-a-demo/buttons"
import { Section } from "../../../components/Section"
import Button from "@theme/Button"
import styles from "./styles.module.css"

export const GetStarted = () => (
  <Section center fullWidth noGap className={styles.root}>
    <Button size="small" to={customFields.cloudUrl}>
      Get started
    </Button>
    Have questions?
    <BookADemo />
  </Section>
)
