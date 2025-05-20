'use client';
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const handleDownload = () => {
    // GitHub Release URL'sine yönlendir
    window.location.href = 'https://github.com/BedoLee/secure-tools/releases/latest/download/LastActivityView.zip';
  };

  // Versiyon bilgisi
  const version = "1.0.1";

  return (
    <>
      <Head>
        <title>LastActivity Viewer - Sistem Aktivite İzleme Aracı</title>
        <meta name="description" content="Windows sisteminizdeki son aktiviteleri güvenli bir şekilde görüntüleyin." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
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
              <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Özellikler</a>
                <a href="#stats" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">İstatistikler</a>
                <a href="#download" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">İndir</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">SSS</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section with Animation */}
        <section className="pt-20 pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-700/50 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">LastActivity Viewer</span>
                <span className="block text-blue-600">Sistem Aktivite İzleme Aracı</span>
              </h2>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Windows sisteminizdeki son aktiviteleri güvenli bir şekilde görüntüleyin. 
                Profesyonel sistem yöneticileri için tasarlandı.
              </p>
              <div className="mt-10 flex justify-center space-x-6">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  ZIP Olarak İndir
                  <span className="ml-2 text-sm opacity-90">v{version} (ZIP)</span>
                </button>
                <a
                  href="#features"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Daha Fazla Bilgi
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Preview Image */}
            <div className="relative mx-auto max-w-5xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10">
                <div className="bg-gray-800 h-8 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="aspect-[16/9] bg-gray-900 relative">
                  <Image
                    src="https://cdn.discordapp.com/attachments/1373341752160817322/1373341876136054824/lastactivityview.png?ex=682a0fca&is=6828be4a&hm=fcedb811f576d8fed8630f9dbf525d4b52a4e1148b9f72d297ab098f57932961&"
                    alt="LastActivity Viewer ekran görüntüsü"
                    width={1024}
                    height={768}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
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

        {/* Features */}
        <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Güçlü Özellikler</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Her detay düşünülerek tasarlandı</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Footer */}
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
                <a href="#privacy" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  Gizlilik Politikası
                </a>
                <a href="#terms" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  Kullanım Şartları
                </a>
                <a href="#contact" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  İletişim
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
