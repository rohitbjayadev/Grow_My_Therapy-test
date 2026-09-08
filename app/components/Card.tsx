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
  const bgClass = variant === 'light' ? 'bg-blue-50 hover:bg-blue-100' : 'bg-white hover:bg-gray-50';

  const content = (
    <div className={`${bgClass} rounded-xl p-8 space-y-4 shadow-sm hover:shadow-lg transition duration-300 border border-gray-100`}>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {withLink && (
        <Link href={href} className="text-blue-600 font-semibold hover:text-blue-700 transition inline-flex items-center gap-1">
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
