'use client';
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
  supportName?: string;
}

export default function LiveSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [supportAgent, setSupportAgent] = useState({
    name: 'Ahmet Yılmaz',
    status: 'online'
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Başlangıç mesajını göster
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: Date.now(),
            text: `Merhaba! Ben ${supportAgent.name}, SecureTools destek ekibinden. Size nasıl yardımcı olabilirim?`,
            sender: 'support',
            timestamp: new Date(),
            supportName: supportAgent.name
          }
        ]);
      }, 1000);
    }
  }, [isOpen, messages.length, supportAgent.name]);

  const getContextualResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('fiyat') || lowerMessage.includes('ücret')) {
      return 'LastActivity Viewer tamamen ücretsiz bir araçtır. Herhangi bir ödeme yapmanıza gerek yok.';
    }
    
    if (lowerMessage.includes('nasıl') && lowerMessage.includes('indir')) {
      return 'Sayfanın üst kısmındaki "ZIP Olarak İndir" butonuna tıklayarak programı indirebilirsiniz. Kurulum gerektirmez, direkt çalıştırabilirsiniz.';
    }
    
    if (lowerMessage.includes('virus') || lowerMessage.includes('güvenli')) {
      return 'Tüm yazılımlarımız virüs taramasından geçirilmiş ve dijital olarak imzalanmıştır. Antivirüs yazılımlarıyla tam uyumludur.';
    }
    
    if (lowerMessage.includes('windows') || lowerMessage.includes('sürüm')) {
      return 'LastActivity Viewer, Windows 7, 8, 10 ve 11 sürümlerinin tümünde sorunsuz çalışır. 32 ve 64 bit sistemleri destekler.';
    }

    if (lowerMessage.includes('merhaba') || lowerMessage.includes('selam')) {
      return `Merhaba! Size LastActivity Viewer hakkında nasıl yardımcı olabilirim?`;
    }
    
    return 'Anladım. Bu konuda size yardımcı olmak isterim. Daha detaylı bilgi verebilir misiniz?';
  };

  const handleSupportResponse = (userMessage: string) => {
    const typingDelay = Math.random() * 1000 + 1000; // 1-2 saniye arası
    const responseDelay = Math.random() * 1000 + 500; // 0.5-1.5 saniye arası

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const response = getContextualResponse(userMessage);
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: response,
          sender: 'support',
          timestamp: new Date(),
          supportName: supportAgent.name
        }]);
      }, typingDelay);
    }, responseDelay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    handleSupportResponse(newMessage);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center space-x-2"
      >
        {!isOpen ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span>Canlı Destek</span>
          </>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Chat Penceresi */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg font-semibold">
                {supportAgent.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{supportAgent.name}</h3>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className="opacity-90">Çevrimiçi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'support' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400 mr-2">
                    {message.supportName?.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs opacity-75 mt-1 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400 mr-2">
                  {supportAgent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 p-2 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors duration-200"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
} 