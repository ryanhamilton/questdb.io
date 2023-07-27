import React from "react"
import Button from "@theme/Button"
import { GetAccess } from "../cloud/get-access"
import CameraIcon from "../../assets/img/camera.svg"
import MessageIcon from "../../assets/img/message.svg"
import styles from "./styles.module.css"
import clsx from "clsx"
import customFields from "../../config/customFields"

type Props = {
  className?: string
}

export const BookADemo = ({ className }: Props) => (
  <div className={clsx(styles.root, className)}>
    <Button size="small" to={customFields.cloudUrl}>
      Get started
    </Button>
    Have questions?
    <div className={styles.contactButtons}>
      <Button
        size="xxsmall"
        variant="tertiary"
        icon={<CameraIcon />}
        to="/cloud/book-a-demo"
        uppercase={false}
      >
        Book a demo
      </Button>
      or
      <GetAccess
        trigger={
          <Button
            size="xxsmall"
            variant="tertiary"
            icon={<MessageIcon />}
            uppercase={false}
          >
            Contact us
          </Button>
        }
      />
    </div>
  </div>
)
