interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
}

const faqs: { [key: string]: { q: string; a: string }[] } = {
  'Process Hacker 2': [
    { q: 'Process Hacker 2 nedir?', a: 'Gelişmiş süreç yönetimi ve sistem kaynağı izleme aracıdır.' },
    { q: 'Kurulum gerekli mi?', a: 'Hayır, taşınabilir olarak çalışır.' },
  ],
  'SystemLifeInformation': [
    { q: 'SystemLifeInformation ne işe yarar?', a: 'Sistem performansını ve sağlığını analiz eder.' },
    { q: 'Desteklenen sistemler?', a: 'Windows 7/8/10/11.' },
  ],
  'LastActivity Viewer': [
    { q: 'LastActivity Viewer nedir?', a: 'Son kullanıcı aktivitelerini görüntülemenizi sağlar.' },
    { q: 'Ücretsiz mi?', a: 'Evet, tamamen ücretsizdir.' },
  ],
  'USBDeview': [
    { q: 'USBDeview ne yapar?', a: 'USB cihaz geçmişini görüntüler ve yönetir.' },
    { q: 'Kurulum gerekli mi?', a: 'Hayır, doğrudan çalıştırılabilir.' },
  ],
};

export default function FAQModal({ isOpen, onClose, toolName }: FAQModalProps) {
  if (!isOpen) return null;
  const list = faqs[toolName] || [];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1f2e] rounded-lg max-w-lg w-full relative p-6">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-white mb-4">{toolName} - Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          {list.length > 0 ? list.map((item, i) => (
            <div key={i}>
              <p className="font-semibold text-blue-300">{item.q}</p>
              <p className="text-gray-300 ml-2">{item.a}</p>
            </div>
          )) : <p className="text-gray-300">SSS bulunamadı.</p>}
        </div>
      </div>
    </div>
  );
} 