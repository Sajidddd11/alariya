"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import ReviewsSection from "@modules/products/components/reviews-section"
import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"
import ReactMarkdown from "react-markdown"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductDescriptionTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-sm-regular py-2 space-y-4">
      {product.description ? (
        <div className="prose prose-sm max-w-none text-slate-700">
          <ReactMarkdown
            components={{
              // Headings
              h1: ({ children }) => (
                <h1 className="text-xl font-bold text-slate-900 mt-4 mb-2">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">
                  {children}
                </h3>
              ),
              // Paragraphs
              p: ({ children }) => (
                <p className="mb-3 leading-relaxed text-slate-700">
                  {children}
                </p>
              ),
              // Links
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              // Lists
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-3 space-y-1 text-slate-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-3 space-y-1 text-slate-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="ml-2">{children}</li>
              ),
              // Code blocks
              code: ({ inline, children }: any) => {
                if (inline) {
                  return (
                    <code className="bg-slate-100 text-slate-900 px-2 py-1 rounded font-mono text-sm">
                      {children}
                    </code>
                  )
                }
                return (
                  <code className="block bg-slate-100 text-slate-900 p-3 rounded font-mono text-sm overflow-x-auto my-3 border border-slate-200">
                    {children}
                  </code>
                )
              },
              pre: ({ children }) => (
                <pre className="bg-slate-100 p-3 rounded overflow-x-auto my-3 border border-slate-200">
                  {children}
                </pre>
              ),
              // Blockquotes
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600 my-3">
                  {children}
                </blockquote>
              ),
              // Horizontal rule
              hr: () => <hr className="my-4 border-slate-200" />,
            }}
          >
            {product.description}
          </ReactMarkdown>
        </div>
      ) : (
        <p className="text-slate-500">No description available.</p>
      )}

      {product.tags && product.tags.length > 0 && (
        <div className="mt-6 pt-6 border-t border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Related Tags</h4>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag.value}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDescriptionTab
