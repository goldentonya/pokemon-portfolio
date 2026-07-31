type ImageSlotProps = {
  label: string;
  className?: string;
  /** "solid" gives its own neutral base + stripes; "transparent" only lays
   * stripes over whatever background the parent already has (used where the
   * parent supplies its own colored placeholder backdrop, e.g. a photo tile). */
  variant?: "solid" | "transparent";
};

export default function ImageSlot({ label, className = "", variant = "solid" }: ImageSlotProps) {
  const style =
    variant === "solid"
      ? {
          backgroundColor: "#f2ede0",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(23,23,27,0.07) 0 8px, rgba(23,23,27,0.02) 8px 16px)",
        }
      : {
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0 8px, rgba(255,255,255,0.1) 8px 16px)",
        };

  return (
    <div
      className={`flex h-full w-full items-center justify-center p-3 text-center font-pixel text-[10px] leading-tight text-ink/60 ${className}`}
      style={style}
    >
      {label}
    </div>
  );
}
