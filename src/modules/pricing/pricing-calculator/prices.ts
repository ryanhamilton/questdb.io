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
  ram: number
}

export type StorageSpec = {
  /** in GB */
  storage: number
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

  /** when undefined, display `contact us` */
  price?: number
}

export type CPUPricing = CPUSpec & RegionPricing

export type StoragePricing = StorageSpec & RegionPricing

export const cpuPrices: CPUPricing[] = [
  { cores: 2, ram: 8, region: "us-east-2", price: 0.322 },
  { cores: 2, ram: 8, region: "us-west-2", price: 0.322 },
  { cores: 2, ram: 8, region: "eu-west-1", price: 0.36 },
  { cores: 4, ram: 16, region: "us-east-2", price: 0.646 },
  { cores: 4, ram: 16, region: "us-west-2", price: 0.646 },
  { cores: 4, ram: 16, region: "eu-west-1", price: 0.719 },
  { cores: 8, ram: 32, region: "us-east-2", price: 0.968 },
  { cores: 8, ram: 32, region: "us-west-2", price: 0.968 },
  { cores: 8, ram: 32, region: "eu-west-1", price: 1.08 },
  { cores: 16, ram: 64, region: "us-east-2", price: 1.936 },
  { cores: 16, ram: 64, region: "us-west-2", price: 1.936 },
  { cores: 16, ram: 64, region: "eu-west-1", price: 2.16 },
  { cores: 32, ram: 128, region: "us-east-2", price: 3.872 },
  { cores: 32, ram: 128, region: "us-west-2", price: 3.872 },
  { cores: 32, ram: 128, region: "eu-west-1", price: 4.32 },
  { cores: 64, ram: 256, region: "us-east-2" },
  { cores: 64, ram: 256, region: "us-west-2" },
  { cores: 64, ram: 256, region: "eu-west-1" },
  { cores: 96, ram: 384, region: "us-east-2" },
  { cores: 96, ram: 384, region: "us-west-2" },
  { cores: 96, ram: 384, region: "eu-west-1" },
  { cores: 128, ram: 512, region: "us-east-2" },
  { cores: 128, ram: 512, region: "us-west-2" },
  { cores: 128, ram: 512, region: "eu-west-1" },
]

export const storagePrices: StoragePricing[] = [
  { storage: 16, region: "us-east-2", price: 0.018 },
  { storage: 16, region: "us-west-2", price: 0.018 },
  { storage: 16, region: "eu-west-1", price: 0.019 },
  { storage: 25, region: "us-east-2", price: 0.021 },
  { storage: 25, region: "us-west-2", price: 0.021 },
  { storage: 25, region: "eu-west-1", price: 0.022 },
  { storage: 50, region: "us-east-2", price: 0.041 },
  { storage: 50, region: "us-west-2", price: 0.041 },
  { storage: 50, region: "eu-west-1", price: 0.043 },
  { storage: 75, region: "us-east-2", price: 0.061 },
  { storage: 75, region: "us-west-2", price: 0.061 },
  { storage: 75, region: "eu-west-1", price: 0.064 },
  { storage: 100, region: "us-east-2", price: 0.081 },
  { storage: 100, region: "us-west-2", price: 0.081 },
  { storage: 100, region: "eu-west-1", price: 0.085 },
  { storage: 125, region: "us-east-2", price: 0.101 },
  { storage: 125, region: "us-west-2", price: 0.101 },
  { storage: 125, region: "eu-west-1", price: 0.106 },
  { storage: 150, region: "us-east-2", price: 0.121 },
  { storage: 150, region: "us-west-2", price: 0.121 },
  { storage: 150, region: "eu-west-1", price: 0.126 },
  { storage: 175, region: "us-east-2", price: 0.142 },
  { storage: 175, region: "us-west-2", price: 0.142 },
  { storage: 175, region: "eu-west-1", price: 0.147 },
  { storage: 200, region: "us-east-2", price: 0.162 },
  { storage: 200, region: "us-west-2", price: 0.162 },
  { storage: 200, region: "eu-west-1", price: 0.168 },
  { storage: 225, region: "us-east-2", price: 0.182 },
  { storage: 225, region: "us-west-2", price: 0.182 },
  { storage: 225, region: "eu-west-1", price: 0.189 },
  { storage: 250, region: "us-east-2", price: 0.202 },
  { storage: 250, region: "us-west-2", price: 0.202 },
  { storage: 250, region: "eu-west-1", price: 0.21 },
  { storage: 275, region: "us-east-2", price: 0.222 },
  { storage: 275, region: "us-west-2", price: 0.222 },
  { storage: 275, region: "eu-west-1", price: 0.23 },
  { storage: 300, region: "us-east-2", price: 0.242 },
  { storage: 300, region: "us-west-2", price: 0.242 },
  { storage: 300, region: "eu-west-1", price: 0.251 },
  { storage: 325, region: "us-east-2", price: 0.262 },
  { storage: 325, region: "us-west-2", price: 0.262 },
  { storage: 325, region: "eu-west-1", price: 0.272 },
  { storage: 350, region: "us-east-2", price: 0.282 },
  { storage: 350, region: "us-west-2", price: 0.282 },
  { storage: 350, region: "eu-west-1", price: 0.293 },
  { storage: 375, region: "us-east-2", price: 0.302 },
  { storage: 375, region: "us-west-2", price: 0.302 },
  { storage: 375, region: "eu-west-1", price: 0.314 },
  { storage: 400, region: "us-east-2", price: 0.322 },
  { storage: 400, region: "us-west-2", price: 0.322 },
  { storage: 400, region: "eu-west-1", price: 0.334 },
  { storage: 425, region: "us-east-2", price: 0.342 },
  { storage: 425, region: "us-west-2", price: 0.342 },
  { storage: 425, region: "eu-west-1", price: 0.355 },
  { storage: 450, region: "us-east-2", price: 0.362 },
  { storage: 450, region: "us-west-2", price: 0.362 },
  { storage: 450, region: "eu-west-1", price: 0.376 },
  { storage: 475, region: "us-east-2", price: 0.382 },
  { storage: 475, region: "us-west-2", price: 0.382 },
  { storage: 475, region: "eu-west-1", price: 0.397 },
  { storage: 500, region: "us-east-2", price: 0.402 },
  { storage: 500, region: "us-west-2", price: 0.402 },
  { storage: 500, region: "eu-west-1", price: 0.418 },
  { storage: 600, region: "us-east-2", price: 0.469 },
  { storage: 600, region: "us-west-2", price: 0.469 },
  { storage: 600, region: "eu-west-1", price: 0.502 },
  { storage: 700, region: "us-east-2", price: 0.546 },
  { storage: 700, region: "us-west-2", price: 0.546 },
  { storage: 700, region: "eu-west-1", price: 0.585 },
  { storage: 800, region: "us-east-2", price: 0.624 },
  { storage: 800, region: "us-west-2", price: 0.624 },
  { storage: 800, region: "eu-west-1", price: 0.668 },
  { storage: 900, region: "us-east-2", price: 0.702 },
  { storage: 900, region: "us-west-2", price: 0.702 },
  { storage: 900, region: "eu-west-1", price: 0.751 },
  { storage: 1_000, region: "us-east-2", price: 0.78 },
  { storage: 1_000, region: "us-west-2", price: 0.78 },
  { storage: 1_000, region: "eu-west-1", price: 0.834 },
  { storage: 2_000, region: "us-east-2", price: 1.363 },
  { storage: 2_000, region: "us-west-2", price: 1.363 },
  { storage: 2_000, region: "eu-west-1", price: 1.459 },
  { storage: 3_000, region: "us-east-2", price: 2.043 },
  { storage: 3_000, region: "us-west-2", price: 2.043 },
  { storage: 3_000, region: "eu-west-1", price: 2.187 },
  { storage: 4_000, region: "us-east-2", price: 2.724 },
  { storage: 4_000, region: "us-west-2", price: 2.724 },
  { storage: 4_000, region: "eu-west-1", price: 2.916 },
  { storage: 5_000, region: "us-east-2", price: 3.104 },
  { storage: 5_000, region: "us-west-2", price: 3.104 },
  { storage: 5_000, region: "eu-west-1", price: 3.313 },
  { storage: 6_000, region: "us-east-2", price: 3.414 },
  { storage: 6_000, region: "us-west-2", price: 3.414 },
  { storage: 6_000, region: "eu-west-1", price: 3.644 },
  { storage: 7_000, region: "us-east-2", price: 3.676 },
  { storage: 7_000, region: "us-west-2", price: 3.676 },
  { storage: 7_000, region: "eu-west-1", price: 3.924 },
  { storage: 8_000, region: "us-east-2", price: 3.901 },
  { storage: 8_000, region: "us-west-2", price: 3.901 },
  { storage: 8_000, region: "eu-west-1", price: 4.164 },
  { storage: 9_000, region: "us-east-2", price: 4.238 },
  { storage: 9_000, region: "us-west-2", price: 4.238 },
  { storage: 9_000, region: "eu-west-1", price: 4.523 },
  { storage: 10_000, region: "us-east-2", price: 4.551 },
  { storage: 10_000, region: "us-west-2", price: 4.551 },
  { storage: 10_000, region: "eu-west-1", price: 4.858 },
  { storage: 11_000, region: "us-east-2" },
  { storage: 11_000, region: "us-west-2" },
  { storage: 11_000, region: "eu-west-1" },
  { storage: 12_000, region: "us-east-2" },
  { storage: 12_000, region: "us-west-2" },
  { storage: 12_000, region: "eu-west-1" },
  { storage: 13_000, region: "us-east-2" },
  { storage: 13_000, region: "us-west-2" },
  { storage: 13_000, region: "eu-west-1" },
  { storage: 14_000, region: "us-east-2" },
  { storage: 14_000, region: "us-west-2" },
  { storage: 14_000, region: "eu-west-1" },
  { storage: 15_000, region: "us-east-2" },
  { storage: 15_000, region: "us-west-2" },
  { storage: 15_000, region: "eu-west-1" },
  { storage: 16_000, region: "us-east-2" },
  { storage: 16_000, region: "us-west-2" },
  { storage: 16_000, region: "eu-west-1" },
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
