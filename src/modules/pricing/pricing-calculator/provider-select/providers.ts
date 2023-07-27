import { ProviderLogo } from "src/assets/types"

export type Provider = {
  key: "aws" | "gcp" | "azure"
  img: ProviderLogo
  available: boolean
}

export const providers: readonly Provider[] = [
  {
    key: "aws",
    img: {
      src: "/img/pages/enterprise/aws.png",
      width: 40,
      height: 22,
      alt: "Amazon Web Services (AWS) logo",
    },
    available: true,
  },
  {
    key: "gcp",
    img: {
      src: "/img/pages/enterprise/gcp.png",
      width: 85,
      height: 13,
      alt: "Google Cloud Platform (GCP) logo",
    },
    available: false,
  },
  {
    key: "azure",
    img: {
      src: "/img/pages/enterprise/azure.png",
      width: 58,
      height: 17,
      alt: "Microsoft Azure logo",
    },
    available: false,
  },
]
