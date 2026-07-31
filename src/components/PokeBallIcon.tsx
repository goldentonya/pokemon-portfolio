type PokeBallIconProps = {
  size: number;
  borderWidth?: number;
  borderColor?: string;
  withCenterDot?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function PokeBallIcon({
  size,
  borderWidth = 3,
  borderColor = "#17171b",
  withCenterDot = false,
  className = "",
  style,
}: PokeBallIconProps) {
  return (
    <div
      className={`relative shrink-0 rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid ${borderColor}`,
        background: "linear-gradient(#e3350d 0 50%, #fff 50% 100%)",
        ...style,
      }}
    >
      {withCenterDot && (
        <div
          className="absolute inset-0 m-auto rounded-full bg-white"
          style={{ width: size * 0.27, height: size * 0.27, border: `${borderWidth}px solid ${borderColor}` }}
        />
      )}
    </div>
  );
}
