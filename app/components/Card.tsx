import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  withLink?: boolean;
  variant?: 'light' | 'white';
}

export function Card({
  title,
  description,
  href = '#',
  withLink = false,
  variant = 'light',
}: CardProps) {
  const bgClass = variant === 'light' ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-white';
  const borderClass = variant === 'light' ? 'border-gray-200' : 'border-gray-200';

  const content = (
    <div className={`${bgClass} p-8 space-y-4 transition duration-300 border ${borderClass}`}>
      <h3 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: '1.5rem', fontWeight: 700 }} className="text-gray-900">
        {title}
      </h3>
      <p style={{ fontFamily: "'Muli', sans-serif", fontSize: '1rem', lineHeight: 1.8 }} className="text-gray-700">
        {description}
      </p>
      {withLink && (
        <Link href={href} style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.95rem' }} className="text-gray-900 font-semibold hover:text-gray-700 transition inline-flex items-center gap-1">
          Learn more <span>→</span>
        </Link>
      )}
    </div>
  );

  return withLink ? (
    <Link href={href} className="block group">
      {content}
    </Link>
  ) : (
    content
  );
}
