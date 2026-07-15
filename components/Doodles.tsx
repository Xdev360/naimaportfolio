export function ScissorsDown({ className = "" }: { className?: string }) {
  // Extracted scissors doodle with dashed trail pointing down
  return (
    <img
      src="/images/scissors-down.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  );
}
