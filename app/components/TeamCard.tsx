interface TeamCardProps {
  name: string;
  title: string;
  specialty: string;
}

export function TeamCard({ name, title, specialty }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100">
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-64 flex items-center justify-center">
        <svg className="w-20 h-20 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-bold text-base text-gray-900">{name}</h3>
        <div>
          <p className="text-sm text-blue-600 font-semibold">{title}</p>
          <p className="text-sm text-gray-600 mt-1">{specialty}</p>
        </div>
      </div>
    </div>
  );
}
