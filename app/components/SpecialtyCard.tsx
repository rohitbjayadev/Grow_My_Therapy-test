interface SpecialtyCardProps {
  title: string;
  description: string;
}

export function SpecialtyCard({ title, description }: SpecialtyCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-100 hover:border-blue-200">
      <h3 className="font-bold text-base text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
