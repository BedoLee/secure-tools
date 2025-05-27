import Image from 'next/image';

interface ScreenshotsModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
}

const screenshots: { [key: string]: string[] } = {
  'Process Hacker 2': ['/images/ph1.png', '/images/ph2.png'],
  'SystemLifeInformation': ['/images/si1.png', '/images/si2.png'],
  'LastActivity Viewer': ['/images/la1.png', '/images/la2.png'],
  'USBDeview': ['/images/usb1.png', '/images/usb2.png'],
};

export default function ScreenshotsModal({ isOpen, onClose, toolName }: ScreenshotsModalProps) {
  if (!isOpen) return null;
  const imgs = screenshots[toolName] || [];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-lg max-w-3xl w-full relative p-6">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-white mb-4">{toolName} - Ekran Görüntüleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {imgs.length > 0 ? imgs.map((src, i) => (
            <div key={i} className="bg-gray-900 rounded-lg overflow-hidden">
              <Image src={src} alt={toolName + ' screenshot ' + (i+1)} width={400} height={250} className="object-cover w-full h-56" />
            </div>
          )) : <p className="text-gray-300">Görsel bulunamadı.</p>}
        </div>
      </div>
    </div>
  );
} 