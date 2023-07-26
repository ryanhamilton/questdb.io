export type RegionKey =
  | "eu-west-1"
  | "us-east-2"
  | "us-west-2"
  | "ap-south-1"
  | "eu-central-1"

export type Region = {
  readonly key: RegionKey
  readonly label: string
  readonly available: boolean
}

export type CPUSpec = {
  cores: number
  ramGB: number
}

export type StorageSpec = {
  storageGB: number
}

export const regions: readonly Region[] = [
  { key: "us-east-2", label: "Ohio", available: true },
  { key: "us-west-2", label: "Oregon", available: true },
  { key: "eu-west-1", label: "Ireland", available: true },
  { key: "ap-south-1", label: "Mumbai", available: false },
  { key: "eu-central-1", label: "Frankfurt", available: false },
]

export const availableRegions = regions.filter((region) => region.available)

type RegionPricing = {
  region: RegionKey
  price: number | "contact"
}

export type CPUPricing = CPUSpec & RegionPricing

export type StoragePricing = StorageSpec & RegionPricing

export const cpuPrices: CPUPricing[] = [
  { cores: 2, ramGB: 8, region: "us-east-2", price: 0.322 },
  { cores: 2, ramGB: 8, region: "us-west-2", price: 0.322 },
  { cores: 2, ramGB: 8, region: "eu-west-1", price: 0.36 },
  { cores: 4, ramGB: 16, region: "us-east-2", price: 0.646 },
  { cores: 4, ramGB: 16, region: "us-west-2", price: 0.646 },
  { cores: 4, ramGB: 16, region: "eu-west-1", price: 0.719 },
  { cores: 8, ramGB: 32, region: "us-east-2", price: 0.968 },
  { cores: 8, ramGB: 32, region: "us-west-2", price: 0.968 },
  { cores: 8, ramGB: 32, region: "eu-west-1", price: 1.08 },
  { cores: 16, ramGB: 64, region: "us-east-2", price: 1.936 },
  { cores: 16, ramGB: 64, region: "us-west-2", price: 1.936 },
  { cores: 16, ramGB: 64, region: "eu-west-1", price: 2.16 },
  { cores: 32, ramGB: 128, region: "us-east-2", price: 3.872 },
  { cores: 32, ramGB: 128, region: "us-west-2", price: 3.872 },
  { cores: 32, ramGB: 128, region: "eu-west-1", price: 4.32 },
  { cores: 64, ramGB: 256, region: "us-east-2", price: "contact" },
  { cores: 64, ramGB: 256, region: "us-west-2", price: "contact" },
  { cores: 64, ramGB: 256, region: "eu-west-1", price: "contact" },
  { cores: 96, ramGB: 384, region: "us-east-2", price: "contact" },
  { cores: 96, ramGB: 384, region: "us-west-2", price: "contact" },
  { cores: 96, ramGB: 384, region: "eu-west-1", price: "contact" },
  { cores: 128, ramGB: 512, region: "us-east-2", price: "contact" },
  { cores: 128, ramGB: 512, region: "us-west-2", price: "contact" },
  { cores: 128, ramGB: 512, region: "eu-west-1", price: "contact" },
]

export const storagePrices: StoragePricing[] = [
  { storageGB: 16, region: "us-east-2", price: 0.018 },
  { storageGB: 16, region: "us-west-2", price: 0.018 },
  { storageGB: 16, region: "eu-west-1", price: 0.019 },
  { storageGB: 25, region: "us-east-2", price: 0.021 },
  { storageGB: 25, region: "us-west-2", price: 0.021 },
  { storageGB: 25, region: "eu-west-1", price: 0.022 },
  { storageGB: 50, region: "us-east-2", price: 0.041 },
  { storageGB: 50, region: "us-west-2", price: 0.041 },
  { storageGB: 50, region: "eu-west-1", price: 0.043 },
  { storageGB: 75, region: "us-east-2", price: 0.061 },
  { storageGB: 75, region: "us-west-2", price: 0.061 },
  { storageGB: 75, region: "eu-west-1", price: 0.064 },
  { storageGB: 100, region: "us-east-2", price: 0.081 },
  { storageGB: 100, region: "us-west-2", price: 0.081 },
  { storageGB: 100, region: "eu-west-1", price: 0.085 },
  { storageGB: 125, region: "us-east-2", price: 0.101 },
  { storageGB: 125, region: "us-west-2", price: 0.101 },
  { storageGB: 125, region: "eu-west-1", price: 0.106 },
  { storageGB: 150, region: "us-east-2", price: 0.121 },
  { storageGB: 150, region: "us-west-2", price: 0.121 },
  { storageGB: 150, region: "eu-west-1", price: 0.126 },
  { storageGB: 175, region: "us-east-2", price: 0.142 },
  { storageGB: 175, region: "us-west-2", price: 0.142 },
  { storageGB: 175, region: "eu-west-1", price: 0.147 },
  { storageGB: 200, region: "us-east-2", price: 0.162 },
  { storageGB: 200, region: "us-west-2", price: 0.162 },
  { storageGB: 200, region: "eu-west-1", price: 0.168 },
  { storageGB: 225, region: "us-east-2", price: 0.182 },
  { storageGB: 225, region: "us-west-2", price: 0.182 },
  { storageGB: 225, region: "eu-west-1", price: 0.189 },
  { storageGB: 250, region: "us-east-2", price: 0.202 },
  { storageGB: 250, region: "us-west-2", price: 0.202 },
  { storageGB: 250, region: "eu-west-1", price: 0.21 },
  { storageGB: 275, region: "us-east-2", price: 0.222 },
  { storageGB: 275, region: "us-west-2", price: 0.222 },
  { storageGB: 275, region: "eu-west-1", price: 0.23 },
  { storageGB: 300, region: "us-east-2", price: 0.242 },
  { storageGB: 300, region: "us-west-2", price: 0.242 },
  { storageGB: 300, region: "eu-west-1", price: 0.251 },
  { storageGB: 325, region: "us-east-2", price: 0.262 },
  { storageGB: 325, region: "us-west-2", price: 0.262 },
  { storageGB: 325, region: "eu-west-1", price: 0.272 },
  { storageGB: 350, region: "us-east-2", price: 0.282 },
  { storageGB: 350, region: "us-west-2", price: 0.282 },
  { storageGB: 350, region: "eu-west-1", price: 0.293 },
  { storageGB: 375, region: "us-east-2", price: 0.302 },
  { storageGB: 375, region: "us-west-2", price: 0.302 },
  { storageGB: 375, region: "eu-west-1", price: 0.314 },
  { storageGB: 400, region: "us-east-2", price: 0.322 },
  { storageGB: 400, region: "us-west-2", price: 0.322 },
  { storageGB: 400, region: "eu-west-1", price: 0.334 },
  { storageGB: 425, region: "us-east-2", price: 0.342 },
  { storageGB: 425, region: "us-west-2", price: 0.342 },
  { storageGB: 425, region: "eu-west-1", price: 0.355 },
  { storageGB: 450, region: "us-east-2", price: 0.362 },
  { storageGB: 450, region: "us-west-2", price: 0.362 },
  { storageGB: 450, region: "eu-west-1", price: 0.376 },
  { storageGB: 475, region: "us-east-2", price: 0.382 },
  { storageGB: 475, region: "us-west-2", price: 0.382 },
  { storageGB: 475, region: "eu-west-1", price: 0.397 },
  { storageGB: 500, region: "us-east-2", price: 0.402 },
  { storageGB: 500, region: "us-west-2", price: 0.402 },
  { storageGB: 500, region: "eu-west-1", price: 0.418 },
  { storageGB: 600, region: "us-east-2", price: 0.469 },
  { storageGB: 600, region: "us-west-2", price: 0.469 },
  { storageGB: 600, region: "eu-west-1", price: 0.502 },
  { storageGB: 700, region: "us-east-2", price: 0.546 },
  { storageGB: 700, region: "us-west-2", price: 0.546 },
  { storageGB: 700, region: "eu-west-1", price: 0.585 },
  { storageGB: 800, region: "us-east-2", price: 0.624 },
  { storageGB: 800, region: "us-west-2", price: 0.624 },
  { storageGB: 800, region: "eu-west-1", price: 0.668 },
  { storageGB: 900, region: "us-east-2", price: 0.702 },
  { storageGB: 900, region: "us-west-2", price: 0.702 },
  { storageGB: 900, region: "eu-west-1", price: 0.751 },
  { storageGB: 1_000, region: "us-east-2", price: 0.78 },
  { storageGB: 1_000, region: "us-west-2", price: 0.78 },
  { storageGB: 1_000, region: "eu-west-1", price: 0.834 },
  { storageGB: 2_000, region: "us-east-2", price: 1.363 },
  { storageGB: 2_000, region: "us-west-2", price: 1.363 },
  { storageGB: 2_000, region: "eu-west-1", price: 1.459 },
  { storageGB: 3_000, region: "us-east-2", price: 2.043 },
  { storageGB: 3_000, region: "us-west-2", price: 2.043 },
  { storageGB: 3_000, region: "eu-west-1", price: 2.187 },
  { storageGB: 4_000, region: "us-east-2", price: 2.724 },
  { storageGB: 4_000, region: "us-west-2", price: 2.724 },
  { storageGB: 4_000, region: "eu-west-1", price: 2.916 },
  { storageGB: 5_000, region: "us-east-2", price: 3.104 },
  { storageGB: 5_000, region: "us-west-2", price: 3.104 },
  { storageGB: 5_000, region: "eu-west-1", price: 3.313 },
  { storageGB: 6_000, region: "us-east-2", price: 3.414 },
  { storageGB: 6_000, region: "us-west-2", price: 3.414 },
  { storageGB: 6_000, region: "eu-west-1", price: 3.644 },
  { storageGB: 7_000, region: "us-east-2", price: 3.676 },
  { storageGB: 7_000, region: "us-west-2", price: 3.676 },
  { storageGB: 7_000, region: "eu-west-1", price: 3.924 },
  { storageGB: 8_000, region: "us-east-2", price: 3.901 },
  { storageGB: 8_000, region: "us-west-2", price: 3.901 },
  { storageGB: 8_000, region: "eu-west-1", price: 4.164 },
  { storageGB: 9_000, region: "us-east-2", price: 4.238 },
  { storageGB: 9_000, region: "us-west-2", price: 4.238 },
  { storageGB: 9_000, region: "eu-west-1", price: 4.523 },
  { storageGB: 10_000, region: "us-east-2", price: 4.551 },
  { storageGB: 10_000, region: "us-west-2", price: 4.551 },
  { storageGB: 10_000, region: "eu-west-1", price: 4.858 },
  { storageGB: 11_000, region: "us-east-2", price: "contact" },
  { storageGB: 11_000, region: "us-west-2", price: "contact" },
  { storageGB: 11_000, region: "eu-west-1", price: "contact" },
  { storageGB: 12_000, region: "us-east-2", price: "contact" },
  { storageGB: 12_000, region: "us-west-2", price: "contact" },
  { storageGB: 12_000, region: "eu-west-1", price: "contact" },
  { storageGB: 13_000, region: "us-east-2", price: "contact" },
  { storageGB: 13_000, region: "us-west-2", price: "contact" },
  { storageGB: 13_000, region: "eu-west-1", price: "contact" },
  { storageGB: 14_000, region: "us-east-2", price: "contact" },
  { storageGB: 14_000, region: "us-west-2", price: "contact" },
  { storageGB: 14_000, region: "eu-west-1", price: "contact" },
  { storageGB: 15_000, region: "us-east-2", price: "contact" },
  { storageGB: 15_000, region: "us-west-2", price: "contact" },
  { storageGB: 15_000, region: "eu-west-1", price: "contact" },
  { storageGB: 16_000, region: "us-east-2", price: "contact" },
  { storageGB: 16_000, region: "us-west-2", price: "contact" },
  { storageGB: 16_000, region: "eu-west-1", price: "contact" },
]

export const pricesByRegion: {
  [key in RegionKey]?: { cpu: CPUPricing[]; storage: StorageSpec[] }
} = availableRegions
  .map((region) => region.key)
  .reduce((acc, region) => {
    const cpu = cpuPrices.filter((spec) => spec.region === region)
    const storage = storagePrices.filter((spec) => spec.region === region)

    return {
      ...acc,
      [region]: {
        cpu,
        storage,
      },
    }
  }, {})
