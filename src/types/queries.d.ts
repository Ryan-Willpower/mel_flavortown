export interface ProductResponse {
  product: Product[]
}

export interface Product {
  product_id: number
  product_name: string
  skus: SKU[]
}

interface SKU {
  amount: number
  price: number
  product_variant_option_combinations: ProductVariantOptionCombinations[]
}

interface ProductVariantOptionCombinations {
  product_variant_option: ProductVariantOption
}

interface ProductVariantOption {
  product_variant_options_name: string
}
