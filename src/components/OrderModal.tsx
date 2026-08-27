import { useEffect } from 'react'
import type { Product } from '../data/products'
import { WHATSAPP_NUMBER } from '../data/products'
import './OrderModal.css'

interface OrderModalProps {
  product: Product
  onClose: () => void
}

export default function OrderModal({ product, onClose }: OrderModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const prefilledText = encodeURIComponent(
    `Hi Lily & Looms! 👋\n\nI'd like to order:\n\n` +
    `*Product:* ${product.name}\n` +
    `*Price:* PKR ${product.price.toLocaleString()}\n\n` +
    `Please let me know availability and payment details. Thank you! 🌸`
  )
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${prefilledText}`

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Close order dialog">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal__content">
          {/* Product recap */}
          <div className="modal__product">
            <div className="modal__img-wrap">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="modal__product-info">
              {product.customizable && (
                <span className="modal__badge">✨ Customizable</span>
              )}
              <h2 className="modal__product-name" id="modal-title">{product.name}</h2>
              <p className="modal__product-price">
                PKR {product.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="modal__message">
            <div className="modal__message-icon" aria-hidden="true">💬</div>
            <h3 className="modal__message-title">Ready to order?</h3>
            <p className="modal__message-text">
              To place your order, message us directly on WhatsApp — we'll confirm
              availability, colour options, and payment details with you personally.
              Every order gets our full attention. 🌸
            </p>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp modal__cta"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Open WhatsApp to Order
          </a>

          <button className="modal__cancel" onClick={onClose}>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
