import Image from 'next/image';

interface TeamCardProps {
  name: string;
  title: string;
  specialty: string;
  imageUrl?: string;
}

const therapistImages: { [key: string]: string } = {
  'Jennifer Anderson': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg',
  'Candace Bletscher': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg',
  'Heather Williams-Baumgart': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg',
  'Michaela Gorospe': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg',
  'Samantha Johnson': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg',
  'Autumn Bodily': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg',
  'Andrea Watkins': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png',
  'Rosa Gomez': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg',
  'Chad Flores': 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg',
};

export function TeamCard({ name, title, specialty }: TeamCardProps) {
  const imageUrl = therapistImages[name];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100">
      {imageUrl ? (
        <div className="relative h-64 w-full bg-gray-200">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-64 flex items-center justify-center">
          <svg className="w-20 h-20 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}
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
