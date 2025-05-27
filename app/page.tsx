'use client';
import Image from "next/image";
import Head from "next/head";
import LiveSupport from "./components/LiveSupport";
import VideoModal from "./components/VideoModal";
import ScreenshotsModal from "./components/ScreenshotsModal";
import FAQModal from "./components/FAQModal";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSelector from "./components/LanguageSelector";
import { useState } from "react";

const LEGAL_TEXTS = {
  privacy: {
    title: "Gizlilik Politikası",
    content: `Kişisel verileriniz KVKK ve GDPR kapsamında korunur. Sitemiz, kullanıcı verilerini üçüncü şahıslarla paylaşmaz. Daha fazla bilgi için bizimle iletişime geçebilirsiniz.`
  },
  terms: {
    title: "Kullanım Şartları",
    content: `Bu sitedeki yazılımlar üçüncü parti olup, kullanımı tamamen kullanıcı sorumluluğundadır. Yazılımlar ücretsizdir ve herhangi bir garanti verilmez.`
  },
  kvkk: {
    title: "KVKK / GDPR",
    content: `Kişisel verilerinizin korunması için gerekli tüm teknik ve idari tedbirler alınmaktadır. Detaylı bilgi için lütfen gizlilik politikamızı inceleyin.`
  }
};

function LegalModal({ open, onClose, type }: { open: boolean, onClose: () => void, type: keyof typeof LEGAL_TEXTS }) {
  if (!open) return null;
  const { title, content } = LEGAL_TEXTS[type];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; toolName: string }>({
    isOpen: false,
    toolName: ''
  });
  const [screenshotsModal, setScreenshotsModal] = useState<{ isOpen: boolean; toolName: string }>({
    isOpen: false,
    toolName: ''
  });
  const [faqModal, setFaqModal] = useState<{ isOpen: boolean; toolName: string }>({
    isOpen: false,
    toolName: ''
  });
  const [legalModal, setLegalModal] = useState<{ open: boolean, type: keyof typeof LEGAL_TEXTS }>({ open: false, type: 'privacy' });

  const handleDownload = (fileName: string, url: string) => {
    setDownloading(fileName);
    window.location.href = url;
    setTimeout(() => setDownloading(null), 3000);
  };

  const openVideoModal = (toolName: string) => {
    setVideoModal({ isOpen: true, toolName });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, toolName: '' });
  };

  const openScreenshotsModal = (toolName: string) => {
    setScreenshotsModal({ isOpen: true, toolName });
  };

  const closeScreenshotsModal = () => {
    setScreenshotsModal({ isOpen: false, toolName: '' });
  };

  const openFaqModal = (toolName: string) => {
    setFaqModal({ isOpen: true, toolName });
  };

  const closeFaqModal = () => {
    setFaqModal({ isOpen: false, toolName: '' });
  };

  return (
    <>
      <Head>
        <title>LastActivity Viewer - Sistem Aktivite İzleme Aracı</title>
        <meta name="description" content="Windows sisteminizdeki son aktiviteleri güvenli bir şekilde görüntüleyin." />
      </Head>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SecureTools</h1>
              </div>
              <div className="flex items-center space-x-2">
              <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Özellikler</a>
                <a href="#stats" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">İstatistikler</a>
                <a href="#download" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">İndir</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">SSS</a>
              </nav>
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section with Animation */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-[#1a1f2e] via-[#232a3d] to-[#0e101a]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-tr from-blue-900/30 via-blue-700/10 to-transparent animate-pulse" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">SecureTools</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4 drop-shadow-lg">Güvenlik Araçları Paketi</h3>
              <p className="text-lg text-gray-200 mb-6 max-w-xl mx-auto md:mx-0">Windows sistemleriniz için profesyonel güvenlik ve sistem izleme araçları. Hızlı, güvenli ve tamamen ücretsiz!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a href="#tools" className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg transition">Araçları Keşfet</a>
                <a href="#download" className="px-8 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow-lg transition">Hemen İndir</a>
              </div>
              <div className="flex gap-6 justify-center md:justify-start mt-6">
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-2xl font-bold text-blue-400">10K+</div>
                  <div className="text-xs text-gray-200">Aktif Kullanıcı</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-2xl font-bold text-blue-400">%99.9</div>
                  <div className="text-xs text-gray-200">Başarı Oranı</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-xs text-gray-200">Destek</div>
                </div>
              </div>
              <div className="mt-8 text-sm text-green-300 flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l7 4v6c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" fill="currentColor" /><path d="M9.5 12.5l2 2 3-3" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                %100 Güvenli ve virüs taramalı dosyalar
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="110" cy="110" r="100" fill="#232a3d" />
                <rect x="60" y="80" width="100" height="60" rx="16" fill="#2563eb" />
                <rect x="80" y="100" width="60" height="20" rx="6" fill="#fff" />
                <path d="M110 120l10 10 20-20" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="110" cy="110" r="100" stroke="#2563eb" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 bg-white/80 dark:bg-gray-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10K+</div>
                <div className="mt-2 text-gray-600 dark:text-gray-400">Aktif Kullanıcı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">99.9%</div>
                <div className="mt-2 text-gray-600 dark:text-gray-400">Başarı Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">24/7</div>
                <div className="mt-2 text-gray-600 dark:text-gray-400">Teknik Destek</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">4.9/5</div>
                <div className="mt-2 text-gray-600 dark:text-gray-400">Kullanıcı Puanı</div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4">Premium Destek Hizmeti</h2>
                <p className="text-lg text-blue-100">
                  7/24 öncelikli destek, özel eğitim ve kurumsal çözümler için premium hizmetlerimizi keşfedin.
                </p>
              </div>
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                İletişime Geçin
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Güçlü Özellikler</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Her detay düşünülerek tasarlandı</p>
            </div>
            <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Güvenli ve Sertifikalı</h3>
                  <p className="text-gray-500 dark:text-gray-400">Tüm dosyalarımız virüs taramasından geçirilmiş ve dijital olarak imzalanmıştır.</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Dijital İmza
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Virüs Taraması
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Güvenlik Onayı
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Yüksek Performans</h3>
                  <p className="text-gray-500 dark:text-gray-400">Optimize edilmiş kod yapısı ile minimum sistem kaynağı kullanır.</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Hızlı Çalışma
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Düşük RAM Kullanımı
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Optimize Edilmiş
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Kolay Kullanım</h3>
                  <p className="text-gray-500 dark:text-gray-400">Kullanıcı dostu arayüz ile karmaşık işlemleri basitleştirir.</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Sezgisel Arayüz
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Detaylı Raporlar
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Türkçe Arayüz
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Side Tools Advertisement */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Diğer Güvenlik Araçlarımız</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Process Hacker 2 */}
              <div className="relative bg-gray-900 dark:bg-gray-900 border border-white/10 shadow-2xl rounded-3xl p-8 flex flex-col h-full min-h-[320px] gap-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
                  <Image
                    src="/icons/process-hacker.png"
                    alt="Process Hacker 2"
                    width={64}
                    height={64}
                    className="rounded-2xl shadow-lg border-2 border-white/20"
                  />
                </div>
                <div className="p-6">
                  <div className="absolute top-4 right-6 flex items-center gap-2">
                    <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2C10 2 4 3 4 7.5C4 14 10 18 10 18C10 18 16 14 16 7.5C16 3 10 2 10 2Z" fill="#22c55e"/>
                        <path d="M7.5 10.5L9.5 12.5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Antichet tarafından taranmıştır
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-1 break-words">Process Hacker 2</h3>
                  <p className="text-base break-words text-gray-500 dark:text-gray-300">Gelişmiş süreç yönetimi ve sistem kaynağı izleme aracı. Detaylı sistem analizi yapın.</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-green-200 bg-white dark:bg-gray-900 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-400 transition" onClick={() => handleDownload('Process Hacker 2', '/downloads/process-hacker-2.zip')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" /></svg>
                      İndir
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 transition" onClick={() => openFaqModal('Process Hacker 2')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                      SSS
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-200 bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 text-sm font-medium shadow-sm hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-400 transition" onClick={() => openScreenshotsModal('Process Hacker 2')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12.5" r="1.5" /><path d="M21 7l-5.586 5.586a2 2 0 01-2.828 0L9 10.414l-6 6" /></svg>
                      Ekran Görüntüleri
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-red-200 bg-white dark:bg-gray-900 text-red-700 dark:text-red-300 text-sm font-medium shadow-sm hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-400 transition" onClick={() => openVideoModal('Process Hacker 2')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                      Video
                    </button>
                  </div>
                </div>
              </div>

              {/* USBDeview */}
              <div className="relative bg-gray-900 dark:bg-gray-900 border border-white/10 shadow-2xl rounded-3xl p-8 flex flex-col gap-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
                  <Image
                    src="/icons/usbdeview.png"
                    alt="USBDeview"
                    width={64}
                    height={64}
                    className="rounded-2xl shadow-lg border-2 border-white/20"
                  />
                </div>
                <div className="p-6">
                  <div className="absolute top-4 right-6 flex items-center gap-2">
                    <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2C10 2 4 3 4 7.5C4 14 10 18 10 18C10 18 16 14 16 7.5C16 3 10 2 10 2Z" fill="#22c55e"/>
                        <path d="M7.5 10.5L9.5 12.5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Antichet tarafından taranmıştır
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">USBDeview</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    USB cihaz geçmişi ve yönetim aracı.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-green-200 bg-white dark:bg-gray-900 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-400 transition" onClick={() => handleDownload('USBDeview', '/downloads/usbdeview.zip')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" /></svg>
                      İndir
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 transition" onClick={() => openFaqModal('USBDeview')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                      SSS
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-200 bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 text-sm font-medium shadow-sm hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-400 transition" onClick={() => openScreenshotsModal('USBDeview')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12.5" r="1.5" /><path d="M21 7l-5.586 5.586a2 2 0 01-2.828 0L9 10.414l-6 6" /></svg>
                      Ekran Görüntüleri
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-red-200 bg-white dark:bg-gray-900 text-red-700 dark:text-red-300 text-sm font-medium shadow-sm hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-400 transition" onClick={() => openVideoModal('USBDeview')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                      Video
                    </button>
                  </div>
                </div>
              </div>

              {/* SystemLifeInformation */}
              <div className="relative bg-gray-900 dark:bg-gray-900 border border-white/10 shadow-2xl rounded-3xl p-8 flex flex-col h-full w-full min-h-[320px] gap-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
                  <Image
                    src="/icons/systeminformer.png"
                    alt="SystemLifeInformation"
                    width={64}
                    height={64}
                    className="rounded-2xl shadow-lg border-2 border-white/20"
                  />
                </div>
                <div className="p-6">
                  <div className="absolute top-4 right-6 flex items-center gap-2">
                    <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2C10 2 4 3 4 7.5C4 14 10 18 10 18C10 18 16 14 16 7.5C16 3 10 2 10 2Z" fill="#22c55e"/>
                        <path d="M7.5 10.5L9.5 12.5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Antichet tarafından taranmıştır
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-1 break-words truncate max-w-full">SystemLifeInformation</h3>
                  <p className="text-base break-words max-w-full text-gray-500 dark:text-gray-300">Sistem performansını ve sağlığını detaylı olarak analiz edin. Sorunları önceden tespit edin.</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-green-200 bg-white dark:bg-gray-900 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-400 transition" onClick={() => handleDownload('SystemLifeInformation', '/downloads/systemlifeinformation.zip')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" /></svg>
                      İndir
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 transition" onClick={() => openFaqModal('SystemLifeInformation')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                      SSS
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-200 bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 text-sm font-medium shadow-sm hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-400 transition" onClick={() => openScreenshotsModal('SystemLifeInformation')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12.5" r="1.5" /><path d="M21 7l-5.586 5.586a2 2 0 01-2.828 0L9 10.414l-6 6" /></svg>
                      Ekran Görüntüleri
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-red-200 bg-white dark:bg-gray-900 text-red-700 dark:text-red-300 text-sm font-medium shadow-sm hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-400 transition" onClick={() => openVideoModal('SystemLifeInformation')}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                      Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-blue-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Güncellemelerden Haberdar Olun</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Yeni özellikler, güvenlik tavsiyeleri ve güncellemeler hakkında bilgi almak için abone olun.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Abone Ol
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white/80 dark:bg-gray-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sıkça Sorulan Sorular</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Merak ettiğiniz soruların cevapları</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">LastActivity Viewer nedir?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  LastActivity Viewer, Windows sisteminizdeki son kullanıcı aktivitelerini görüntülemenizi sağlayan profesyonel bir araçtır.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Nasıl kullanabilirim?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  İndirdikten sonra kurulum gerektirmez. Doğrudan çalıştırarak kullanmaya başlayabilirsiniz.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Hangi Windows sürümleri destekleniyor?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Windows 7, 8, 10 ve 11 sürümlerinin tümünde sorunsuz çalışır.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Ücretsiz mi?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Evet, LastActivity Viewer tamamen ücretsiz ve açık kaynaklı bir yazılımdır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Araçlar grid'i */}
        <div id="download" className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-20 items-stretch">
          {/* Process Hacker 2 */}
          <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-transparent rounded-3xl shadow-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:border-gradient-to-r hover:from-green-400 hover:to-blue-500 group">
            {/* Badge'ler */}
            <div className="absolute top-4 right-6 flex items-center gap-2">
              <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2C10 2 4 3 4 7.5C4 14 10 18 10 18C10 18 16 14 16 7.5C16 3 10 2 10 2Z" fill="#22c55e"/>
                  <path d="M7.5 10.5L9.5 12.5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Antichet tarafından taranmıştır
              </span>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <Image src="/icons/process-hacker.png" alt="Process Hacker 2" width={64} height={64} className="rounded-2xl shadow-lg border-2 border-white/20" />
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">Process Hacker 2</h3>
                <p className="text-gray-500 dark:text-gray-300 text-base">Gelişmiş süreç yönetimi ve sistem kaynağı izleme aracı. Detaylı sistem analizi yapın.</p>
              </div>
            </div>
            {/* Butonlar */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-green-200 bg-white dark:bg-gray-900 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-400 transition" onClick={() => handleDownload('Process Hacker 2', '/downloads/process-hacker-2.zip')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" /></svg>
                İndir
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 transition" onClick={() => openFaqModal('Process Hacker 2')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                SSS
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-200 bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 text-sm font-medium shadow-sm hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-400 transition" onClick={() => openScreenshotsModal('Process Hacker 2')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12.5" r="1.5" /><path d="M21 7l-5.586 5.586a2 2 0 01-2.828 0L9 10.414l-6 6" /></svg>
                Ekran Görüntüleri
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-red-200 bg-white dark:bg-gray-900 text-red-700 dark:text-red-300 text-sm font-medium shadow-sm hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-400 transition" onClick={() => openVideoModal('Process Hacker 2')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Video
              </button>
            </div>
            {/* Kart Altı: Puan ve İndirme */}
            <div className="flex items-center justify-between mt-6 px-2">
              <div className="flex items-center gap-1 text-yellow-400 text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                4.8
              </div>
              <div className="text-gray-400 text-sm">217 indirme</div>
            </div>
          </div>
          {/* SystemLifeInformation */}
          <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-transparent rounded-3xl shadow-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:border-gradient-to-r hover:from-green-400 hover:to-blue-500 group">
            {/* Badge'ler */}
            <div className="absolute top-4 right-6 flex items-center gap-2">
              <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2C10 2 4 3 4 7.5C4 14 10 18 10 18C10 18 16 14 16 7.5C16 3 10 2 10 2Z" fill="#22c55e"/>
                  <path d="M7.5 10.5L9.5 12.5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Antichet tarafından taranmıştır
              </span>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <Image src="/icons/systeminformer.png" alt="SystemLifeInformation" width={64} height={64} className="rounded-2xl shadow-lg border-2 border-white/20" />
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">SystemLifeInformation</h3>
                <p className="text-gray-500 dark:text-gray-300 text-base">Sistem performansını ve sağlığını detaylı olarak analiz edin. Sorunları önceden tespit edin.</p>
              </div>
            </div>
            {/* Butonlar */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-green-200 bg-white dark:bg-gray-900 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-400 transition" onClick={() => handleDownload('SystemLifeInformation', '/downloads/systemlifeinformation.zip')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" /></svg>
                İndir
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 transition" onClick={() => openFaqModal('SystemLifeInformation')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                SSS
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-200 bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 text-sm font-medium shadow-sm hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-400 transition" onClick={() => openScreenshotsModal('SystemLifeInformation')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12.5" r="1.5" /><path d="M21 7l-5.586 5.586a2 2 0 01-2.828 0L9 10.414l-6 6" /></svg>
                Ekran Görüntüleri
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-red-200 bg-white dark:bg-gray-900 text-red-700 dark:text-red-300 text-sm font-medium shadow-sm hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-400 transition" onClick={() => openVideoModal('SystemLifeInformation')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Video
              </button>
            </div>
            {/* Kart Altı: Puan ve İndirme */}
            <div className="flex items-center justify-between mt-6 px-2">
              <div className="flex items-center gap-1 text-yellow-400 text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                4.7
              </div>
              <div className="text-gray-400 text-sm">143 indirme</div>
            </div>
          </div>
          {/* LastActivity Viewer */}
          <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-transparent rounded-3xl shadow-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:border-gradient-to-r hover:from-green-400 hover:to-blue-500 group">
            {/* Badge'ler */}
            <div className="absolute top-4 right-6 flex items-center gap-2">
              <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2C10 2 4 3 4 7.5C4 14 10 18 10 18C10 18 16 14 16 7.5C16 3 10 2 10 2Z" fill="#22c55e"/>
                  <path d="M7.5 10.5L9.5 12.5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Antichet tarafından taranmıştır
              </span>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <Image src="/icons/lastactivity.png" alt="LastActivity Viewer" width={64} height={64} className="rounded-2xl shadow-lg border-2 border-white/20" />
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">LastActivity Viewer</h3>
                <p className="text-gray-500 dark:text-gray-300 text-base">Windows sisteminizdeki son kullanıcı aktivitelerini güvenli bir şekilde görüntüleyin ve analiz edin.</p>
              </div>
            </div>
            {/* Butonlar */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-green-200 bg-white dark:bg-gray-900 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-400 transition" onClick={() => handleDownload('LastActivity Viewer', '/downloads/lastactivity.zip')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" /></svg>
                İndir
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 transition" onClick={() => openFaqModal('LastActivity Viewer')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                SSS
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-200 bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 text-sm font-medium shadow-sm hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-400 transition" onClick={() => openScreenshotsModal('LastActivity Viewer')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12.5" r="1.5" /><path d="M21 7l-5.586 5.586a2 2 0 01-2.828 0L9 10.414l-6 6" /></svg>
                Ekran Görüntüleri
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-red-200 bg-white dark:bg-gray-900 text-red-700 dark:text-red-300 text-sm font-medium shadow-sm hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-400 transition" onClick={() => openVideoModal('LastActivity Viewer')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Video
              </button>
            </div>
            {/* Kart Altı: Puan ve İndirme */}
            <div className="flex items-center justify-between mt-6 px-2">
              <div className="flex items-center gap-1 text-yellow-400 text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                4.9
              </div>
              <div className="text-gray-400 text-sm">301 indirme</div>
            </div>
          </div>
          {/* USBDeview */}
          <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-transparent rounded-3xl shadow-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:border-gradient-to-r hover:from-green-400 hover:to-blue-500 group">
            {/* Badge'ler */}
            <div className="absolute top-4 right-6 flex items-center gap-2">
              <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2C10 2 4 3 4 7.5C4 14 10 18 10 18C10 18 16 14 16 7.5C16 3 10 2 10 2Z" fill="#22c55e"/>
                  <path d="M7.5 10.5L9.5 12.5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Antichet tarafından taranmıştır
              </span>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <Image src="/icons/usbdeview.png" alt="USBDeview" width={64} height={64} className="rounded-2xl shadow-lg border-2 border-white/20" />
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">USBDeview</h3>
                <p className="text-gray-500 dark:text-gray-300 text-base">USB cihaz geçmişini görüntüleyin ve yönetin. Bağlanan tüm USB cihazlarını takip edin.</p>
              </div>
            </div>
            {/* Butonlar */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-green-200 bg-white dark:bg-gray-900 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-400 transition" onClick={() => handleDownload('USBDeview', '/downloads/usbdeview.zip')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" /></svg>
                İndir
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-200 bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 transition" onClick={() => openFaqModal('USBDeview')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
                SSS
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-purple-200 bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 text-sm font-medium shadow-sm hover:bg-purple-50 dark:hover:bg-purple-950 hover:border-purple-400 transition" onClick={() => openScreenshotsModal('USBDeview')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12.5" r="1.5" /><path d="M21 7l-5.586 5.586a2 2 0 01-2.828 0L9 10.414l-6 6" /></svg>
                Ekran Görüntüleri
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-red-200 bg-white dark:bg-gray-900 text-red-700 dark:text-red-300 text-sm font-medium shadow-sm hover:bg-red-50 dark:hover:bg-red-950 hover:border-red-400 transition" onClick={() => openVideoModal('USBDeview')}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Video
              </button>
            </div>
            {/* Kart Altı: Puan ve İndirme */}
            <div className="flex items-center justify-between mt-6 px-2">
              <div className="flex items-center gap-1 text-yellow-400 text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                4.6
              </div>
              <div className="text-gray-400 text-sm">189 indirme</div>
            </div>
          </div>
        </div>
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} SecureTools</span>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" onClick={() => setLegalModal({open:true,type:'privacy'})} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  Gizlilik Politikası
                </a>
                <a href="#" onClick={() => setLegalModal({open:true,type:'terms'})} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  Kullanım Şartları
                </a>
                <a href="#" onClick={() => setLegalModal({open:true,type:'kvkk'})} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  KVKK / GDPR
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <LiveSupport />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        toolName={videoModal.toolName}
      />

      {/* Screenshots Modal */}
      <ScreenshotsModal
        isOpen={screenshotsModal.isOpen}
        onClose={closeScreenshotsModal}
        toolName={screenshotsModal.toolName}
      />

      {/* FAQ Modal */}
      <FAQModal
        isOpen={faqModal.isOpen}
        onClose={closeFaqModal}
        toolName={faqModal.toolName}
      />

      {/* Legal Modal */}
      <LegalModal
        open={legalModal.open}
        onClose={() => setLegalModal({ open: false, type: 'privacy' })}
        type={legalModal.type}
      />
    </>
  );
}
