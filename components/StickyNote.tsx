export function StickyLabel({
  children,
  rotate = -2,
  color = "#FFC9F0",
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-md font-hand text-xl md:text-2xl sticky-note ${className}`}
      style={{ backgroundColor: color, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

export function TagChip({
  children,
  color = "#FFE68C",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium tag-chip ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}