interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: '2.5rem', fontWeight: 700 }} className="text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p style={{ fontFamily: "'Muli', sans-serif", fontSize: '1rem', lineHeight: 1.8 }} className="text-gray-700 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
