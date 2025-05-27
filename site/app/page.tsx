import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/icon.svg" alt="LastActivity Viewer Logo" width={32} height={32} />
              <span className="text-xl font-semibold">LastActivity Viewer</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="#features" className="hover:text-blue-400 transition">Özellikler</Link>
              <Link href="#stats" className="hover:text-blue-400 transition">İstatistikler</Link>
              <Link href="#faq" className="hover:text-blue-400 transition">SSS</Link>
              <Link href="#download" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
                İndir
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Windows Sistem Aktivitelerini{" "}
                <span className="text-blue-500">Güvenle İzleyin</span>
              </h1>
              <p className="text-xl text-gray-300">
                LastActivity Viewer ile sisteminizde gerçekleşen tüm aktiviteleri profesyonel bir şekilde takip edin. Güvenlik ve performans kontrolü artık çok daha kolay.
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href="#download"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-medium transition flex items-center space-x-2"
                >
                  <Image src="/window.svg" alt="Windows icon" width={24} height={24} />
                  <span>Windows için İndir</span>
                </Link>
                <Link 
                  href="#features"
                  className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg text-lg font-medium transition"
                >
                  Özellikleri Keşfet
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Image src="/file.svg" alt="File icon" width={16} height={16} />
                  <span>Boyut: 1.2 MB</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
                  <span>Dil: Türkçe</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/9]">
              <Image
                src="https://cdn.discordapp.com/attachments/1373341752160817322/1373341876136054824/lastactivityview.png"
                alt="LastActivity Viewer ekran görüntüsü"
                fill
                className="object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Güçlü Özellikler, Kolay Kullanım
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gerçek Zamanlı İzleme</h3>
              <p className="text-gray-400">
                Sistem aktivitelerini anlık olarak takip edin. Tüm değişiklikler ve olaylar anında görüntülenir.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenli Analiz</h3>
              <p className="text-gray-400">
                Sistem verileriniz tamamen güvende. Hiçbir veri dışarı aktarılmaz, tüm işlemler lokalde gerçekleşir.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detaylı Raporlama</h3>
              <p className="text-gray-400">
                Sistem aktivitelerini detaylı raporlar halinde görüntüleyin ve dışa aktarın.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Yüksek Performans</h3>
              <p className="text-gray-400">
                Minimum sistem kaynağı kullanarak maksimum performans sağlar.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kolay Kullanım</h3>
              <p className="text-gray-400">
                Kullanıcı dostu arayüz ile karmaşık sistem verilerini kolayca analiz edin.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Otomatik Güncelleme</h3>
              <p className="text-gray-400">
                Her zaman en güncel sürümü kullanın. Otomatik güncelleme sistemi ile yeni özelliklere anında erişin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Güvenilir ve Popüler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">10K+</div>
              <div className="text-gray-400">Aktif Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">50K+</div>
              <div className="text-gray-400">İndirme</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">4.8/5</div>
              <div className="text-gray-400">Kullanıcı Puanı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-gray-400">Teknik Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Sıkça Sorulan Sorular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">LastActivity Viewer ücretsiz mi?</h3>
              <p className="text-gray-400">
                Evet, LastActivity Viewer tamamen ücretsiz bir yazılımdır ve her zaman ücretsiz kalacaktır.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Sistem gereksinimleri nelerdir?</h3>
              <p className="text-gray-400">
                Windows 7 ve üzeri işletim sistemlerinde çalışır. Minimum sistem gereksinimi yoktur.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Verilerim güvende mi?</h3>
              <p className="text-gray-400">
                Tüm veriler lokalde işlenir, hiçbir veri dışarı aktarılmaz. %100 güvenlidir.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Teknik destek alabilir miyim?</h3>
              <p className="text-gray-400">
                Evet, GitHub üzerinden 7/24 teknik destek alabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Hemen İndirin, Kullanmaya Başlayın
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            LastActivity Viewer'ı indirin ve sistem aktivitelerinizi profesyonel bir şekilde izlemeye başlayın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/LastActivityView.exe"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-medium transition flex items-center space-x-2"
            >
              <Image src="/window.svg" alt="Windows icon" width={24} height={24} />
              <span>Windows için İndir</span>
            </Link>
            <Link 
              href="https://github.com/BedoLee/secure-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg text-lg font-medium transition flex items-center space-x-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>GitHub'da İncele</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/icon.svg" alt="LastActivity Viewer Logo" width={24} height={24} />
              <span className="text-sm text-gray-400">© 2024 LastActivity Viewer. Tüm hakları saklıdır.</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#features" className="text-sm text-gray-400 hover:text-blue-400 transition">
                Özellikler
              </Link>
              <Link href="#stats" className="text-sm text-gray-400 hover:text-blue-400 transition">
                İstatistikler
              </Link>
              <Link href="#faq" className="text-sm text-gray-400 hover:text-blue-400 transition">
                SSS
              </Link>
              <Link 
                href="https://github.com/BedoLee/secure-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-blue-400 transition"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 