interface SpecialtyCardProps {
  title: string;
  description: string;
}

export function SpecialtyCard({ title, description }: SpecialtyCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
