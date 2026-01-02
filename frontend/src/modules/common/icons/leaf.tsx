import { Leaf } from "lucide-react"

interface LeafIconProps {
  size?: number
  color?: string
}

export default function LeafIcon({ size = 48, color = "#262626" }: LeafIconProps) {
  return (
    <>
      <style>{`
        @keyframes leaf-fade {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .leaf-animate {
          animation: leaf-fade 2s ease-in-out infinite;
        }
      `}</style>
      <div className="leaf-animate">
        <Leaf size={size} color={color} strokeWidth={1.5} />
      </div>
    </>
  )
}
