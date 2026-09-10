interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  bg?: string;
}

export function ImagePlaceholder({ label, className = '', bg = 'var(--color-accent)' }: ImagePlaceholderProps) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <svg
        className="w-10 h-10 opacity-40"
        style={{ color: 'var(--color-black)' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {label && (
        <span className="text-xs opacity-50 text-center px-2" style={{ color: 'var(--color-black)' }}>
          {label}
        </span>
      )}
    </div>
  );
}
