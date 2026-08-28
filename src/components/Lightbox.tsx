import { useEffect, useState } from 'react'
import './Lightbox.css'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
  images?: string[]
  index?: number
  onNavigate?: (index: number) => void
}

export default function Lightbox({ src, alt, onClose, images = [], index = 0, onNavigate }: LightboxProps) {
  const [scale, setScale] = useState(1)
  const [zoomed, setZoomed] = useState(false)
  const hasMultiple = images.length > 1

  const goPrev = () => onNavigate?.((index - 1 + images.length) % images.length)
  const goNext = () => onNavigate?.((index + 1) % images.length)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && hasMultiple) goPrev()
      else if (e.key === 'ArrowRight' && hasMultiple) goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  })

  const toggleZoom = () => {
    if (zoomed) {
      setScale(1)
      setZoomed(false)
    } else {
      setScale(2.2)
      setZoomed(true)
    }
  }

  return (
    <div
      className="lightbox-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={`Zoomed view of ${alt}`}
    >
      {/* Close button */}
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Zoom hint */}
      <div className="lightbox__hint">
        {zoomed ? 'Click to zoom out' : 'Click image to zoom in'}
      </div>

      {/* Image */}
      <div className="lightbox__img-container" onClick={toggleZoom}>
        <img
          src={src}
          alt={alt}
          className={`lightbox__img${zoomed ? ' lightbox__img--zoomed' : ''}`}
          style={{ transform: `scale(${scale})` }}
          draggable={false}
        />
      </div>

      {/* Zoom controls */}
      <div className="lightbox__controls">
        <button
          className="lightbox__zoom-btn"
          onClick={() => { const s = Math.max(1, scale - 0.4); setScale(s); setZoomed(s > 1) }}
          aria-label="Zoom out"
          disabled={scale <= 1}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </button>
        <span className="lightbox__zoom-level">{Math.round(scale * 100)}%</span>
        <button
          className="lightbox__zoom-btn"
          onClick={() => { const s = Math.min(4, scale + 0.4); setScale(s); setZoomed(true) }}
          aria-label="Zoom in"
          disabled={scale >= 4}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </button>
      </div>

      {/* Prev / Next navigation */}
      {hasMultiple && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={goNext}
            aria-label="Next image"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <div className="lightbox__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`lightbox__dot${i === index ? ' lightbox__dot--active' : ''}`}
                onClick={() => onNavigate?.(i)}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
