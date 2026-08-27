const C = '#9B4FA3'
const SW = 1.8

export function IconBear({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9.5" cy="7" r="3" />
      <circle cx="22.5" cy="7" r="3" />
      <ellipse cx="16" cy="17" rx="9" ry="10" />
      <circle cx="13" cy="15" r="1.2" fill={C} stroke="none" />
      <circle cx="19" cy="15" r="1.2" fill={C} stroke="none" />
      <ellipse cx="16" cy="18" rx="2" ry="1.5" />
      <path d="M16 19.5v1.5" />
      <path d="M14.5 21.5q1.5 1.5 3 0" />
    </svg>
  )
}

export function IconBouquet({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 14v12" />
      <path d="M13 14v12" />
      <path d="M19 14v12" />
      <circle cx="10" cy="9" r="3.5" />
      <circle cx="16" cy="7" r="3.5" />
      <circle cx="22" cy="9" r="3.5" />
      <circle cx="13" cy="5" r="2.5" />
      <circle cx="19" cy="5" r="2.5" />
      <path d="M11 26q5 2 10 0" />
    </svg>
  )
}

export function IconBag({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 12h16l-2 16H10z" />
      <path d="M12 12V9a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

export function IconGift({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="14" width="22" height="14" rx="2" />
      <path d="M3 14h26v4H3z" />
      <path d="M16 14v14" />
      <path d="M16 14c-3-5-7-5-7-2s4 2 7 2" />
      <path d="M16 14c3-5 7-5 7-2s-4 2-7 2" />
    </svg>
  )
}

export function IconHouse({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 16L16 6l11 10" />
      <path d="M8 14v12h16V14" />
      <rect x="13" y="20" width="6" height="6" rx="0.5" />
    </svg>
  )
}

export function IconKey({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="5" />
      <circle cx="11" cy="11" r="2" />
      <path d="M14.5 14.5L26 26" />
      <path d="M22 22v4" />
      <path d="M25 25v2" />
    </svg>
  )
}

export function IconYarnHeart({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="17" r="9" />
      <path d="M11 14q0-4 5-4t5 4q0 4-5 7t-5-7" />
      <path d="M12 17q3-2.5 5.5 0" />
      <path d="M16 10v-2" />
      <path d="M22 13l1.5-1" />
      <path d="M10 13L8.5 12" />
    </svg>
  )
}

export function IconFlower({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="12" r="3" />
      <circle cx="12" cy="15.5" r="3" />
      <circle cx="20" cy="15.5" r="3" />
      <circle cx="13.5" cy="20" r="3" />
      <circle cx="18.5" cy="20" r="3" />
      <path d="M16 12v18" />
    </svg>
  )
}

export function IconHeart({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 27S4 19 4 12a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 7-12 15-12 15z" />
    </svg>
  )
}

export function IconGlobe({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="16" r="11" />
      <ellipse cx="16" cy="16" rx="5" ry="11" />
      <path d="M5 16h22" />
      <path d="M7 10h18" />
      <path d="M7 22h18" />
    </svg>
  )
}

export function IconPalette({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 3C9 3 4 9 4 16c0 3 1.5 5.5 4 7v2a2 2 0 0 0 2 2h2l1-2a7 7 0 0 0 6.5-3A7.5 7.5 0 0 0 28 16c0-7-5-13-12-13z" />
      <circle cx="11" cy="13" r="1.5" fill={C} stroke="none" />
      <circle cx="15" cy="10" r="1.5" fill={C} stroke="none" />
      <circle cx="20" cy="12" r="1.5" fill={C} stroke="none" />
      <circle cx="22" cy="17" r="1.5" fill={C} stroke="none" />
    </svg>
  )
}

export function IconRuler({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 24L24 4l4 4-20 20z" />
      <path d="M9 19l2-2" />
      <path d="M12 16l2-2" />
      <path d="M15 13l2-2" />
      <path d="M18 10l2-2" />
    </svg>
  )
}

export function IconChatBubble({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 6h22a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H11l-5 4v-4H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M10 13h12" />
      <path d="M10 17h8" />
    </svg>
  )
}

export function IconClock({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 9v7l5 3" />
    </svg>
  )
}

export function IconSparkle({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={C} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 3l2 9 9 2-9 2-2 9-2-9-9-2 9-2z" />
      <path d="M24 20l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    </svg>
  )
}
