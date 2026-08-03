/*
 * Logo Component — Editorial Monolith Design
 * SVG monogram "AN" with burnt sienna and charcoal colors.
 * Clean, geometric, editorial feel.
 */

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ashutosh Nagaria"
    >
      {/* A — burnt sienna */}
      <path
        d="M32 4L56 56H44L38 42H26L20 56H8L32 4ZM35 34H29L32 24L35 34Z"
        fill="#C75B39"
      />
      {/* N — deep charcoal */}
      <path
        d="M24 12H32V36L40 20V12H48V52H40V28L32 44H24V12Z"
        fill="#1A1A1A"
      />
    </svg>
  );
}
