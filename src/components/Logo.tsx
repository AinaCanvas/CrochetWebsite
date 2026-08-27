interface LogoProps {
  size?: number;
}

export default function Logo({ size = 56 }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Lily & Looms"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: '50%',
        display: 'block',
      }}
    />
  )
}
