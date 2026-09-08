interface TeamCardProps {
  name: string;
  title: string;
  specialty: string;
}

export function TeamCard({ name, title, specialty }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="bg-gray-300 h-48 flex items-center justify-center">
        <span className="text-gray-500">Therapist Photo</span>
      </div>
      <div className="p-6 space-y-2">
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <p className="text-sm text-blue-900 font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{specialty}</p>
      </div>
    </div>
  );
}
