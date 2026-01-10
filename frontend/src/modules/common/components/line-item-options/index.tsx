import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type LineItemOptionsProps = {
  variant: HttpTypes.StoreProductVariant | undefined
  metadata?: Record<string, any>
  "data-testid"?: string
  "data-value"?: HttpTypes.StoreProductVariant
}

const LineItemOptions = ({
  variant,
  metadata,
  "data-testid": dataTestid,
  "data-value": dataValue,
}: LineItemOptionsProps) => {
  const concentration = metadata?.concentration

  return (
    <Text
      data-testid={dataTestid}
      data-value={dataValue}
      className="inline-block font-nunito text-xs text-ui-fg-subtle w-full overflow-hidden text-ellipsis"
    >
      {variant?.title}
      {concentration && ` · ${concentration}`}
    </Text>
  )
}

export default LineItemOptions
