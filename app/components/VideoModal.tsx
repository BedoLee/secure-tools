import { useState, useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
}

export default function VideoModal({ isOpen, onClose, toolName }: VideoModalProps) {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Her araç için video URL'sini ayarla
    const videos: { [key: string]: string } = {
      'Process Hacker 2': '', // video yok
      'SystemLifeInformation': '', // video yok
      'LastActivity Viewer': '', // video yok
      'USBDeview': '', // video yok
    };
    setVideoUrl(videos[toolName] || '');
  }, [toolName]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-lg max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-white mb-4">{toolName} - Tanıtım Videosu</h2>
          {videoUrl ? (
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={videoUrl}
                title={`${toolName} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <svg className="w-16 h-16 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 9.75l4.5 2.25-4.5 2.25V9.75z" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p className="text-gray-300 text-lg">Video bulunamadı.</p>
            </div>
          )}
          <div className="mt-4 text-gray-400">
            <p>Bu videoda {toolName} aracının temel özelliklerini ve nasıl kullanılacağını öğrenebilirsiniz.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 