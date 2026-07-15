export function ArrowDoodle({ className = "" }: { className?: string }) {
  // Hand-drawn curvy arrow from the design assets
  return (
    <img
      src="/images/arrow.svg"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  );
}
