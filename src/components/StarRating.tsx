import { useState } from "react";

type Props = {
  value: number;
  onChange?: (value: number) => void;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
};

const sizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

function Star({
  filled,
  className,
}: {
  filled: boolean;
  className: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 1.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L10 14.9l-5.25 2.76 1-5.86L1.5 7.66l5.9-.86L10 1.5z"
      />
    </svg>
  );
}

export default function StarRating({
  value,
  onChange,
  size = "md",
  showValue = false,
}: Props) {
  const [hover, setHover] = useState<number | null>(null);
  const interactive = Boolean(onChange);
  const display = hover ?? value;

  return (
    <div className="inline-flex items-center gap-2">
      <div
        className="inline-flex items-center gap-0.5 text-amber-400"
        onMouseLeave={() => setHover(null)}
      >
        {[1, 2, 3, 4, 5].map((n) => {
          const filled = n <= display;
          if (!interactive) {
            return <Star key={n} filled={filled} className={sizes[size]} />;
          }
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange?.(n)}
              onMouseEnter={() => setHover(n)}
              className="cursor-pointer transition-transform hover:scale-110"
              aria-label={`Rate ${n} ${n === 1 ? "star" : "stars"}`}
            >
              <Star filled={filled} className={sizes[size]} />
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-slate-600">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}
