export type Label = string | { text: string; emphasized: true }

export type ProductInfo = {
  type: "open-source" | "cloud" | "enterprise"
  title: string
  subtitle: string
  highlight?: string
  pricingLabel: Label[]
  pricingSublabel: Label[]
  specs: string[]
  url: string
  ctaLabel: string
}

export const products: ProductInfo[] = [
  {
    type: "open-source",
    title: "Open Source",
    subtitle: "Apache 2.0 License",
    pricingLabel: [{ text: "Free", emphasized: true }],
    pricingSublabel: ["forever"],
    specs: [
      "Fast ingests, dynamic schema",
      "Sub-second SQL queries",
      "Performant with high-cardinality data",
    ],
    url: "/get-questdb/",
    ctaLabel: "Get QuestDB",
  },

  {
    type: "cloud",
    title: "QuestDB Cloud",
    subtitle: "Fully hosted by QuestDB",
    highlight: "$200 credit for new users",
    pricingLabel: [
      "from",
      {
        // hard-coded from hourly price of
        // us-east-2 instance with
        // * 2 CPU
        // * 8 GB RAM
        // * 25 GB storage
        text: "$0.345",
        emphasized: true,
      },
      "per hour",
    ],
    pricingSublabel: [
      {
        // multiplying hourly price
        // by 730
        text: "$252",
        emphasized: true,
      },
      "per month (est)",
    ],
    specs: [
      "Up to 80% data compression",
      "Elastic & highly available",
      "Role-based permissions",
    ],
    url: "#pricing-options",
    ctaLabel: "Explore pricing",
  },

  {
    type: "enterprise",
    title: "QuestDB Enterprise",
    subtitle: "Self-hosted, custom specs",
    pricingLabel: [{ text: "Contact us", emphasized: true }],
    pricingSublabel: ["for a quote"],
    specs: ["Security and permissions", "High availability", "Enterprise SLAs"],
    url: "/enterprise/",
    ctaLabel: "Learn more",
  },
]
