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
  const bgClass = variant === 'light' ? 'bg-blue-50' : 'bg-white';

  const content = (
    <div className={`${bgClass} rounded-lg p-8 space-y-4 shadow-sm hover:shadow-md transition`}>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
      {withLink && (
        <Link href={href} className="text-blue-900 font-semibold hover:text-blue-700 transition inline-block">
          Learn more →
        </Link>
      )}
    </div>
  );

  return withLink ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
