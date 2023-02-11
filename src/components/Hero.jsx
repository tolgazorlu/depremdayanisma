export default function Example() {
  
  return (
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-300 ring-1 ring-gray-100/10 hover:ring-gray-900/20">
                Deprem Dayanışma Youtube {' '}
                <a href="https://www.youtube.com/watch?v=4E7bI1oeXQY" className="font-semibold text-youtube">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Canlı Yayın <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-light sm:text-6xl">
                Deprem Dayanışma Ortak Yayını
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Türkiye'de gerçekleşen 7.7 ve 7.6 büyüklüğündeki depremler nedeniyle toplanan bilim ve teknoloji ağırlıklı kanallar, depremzedelere destek veriyor.
              </p>
              <h2 className="mt-4 font-bold tracking-tight text-cyan-500 sm:text-3xl">8 Şubat 2023<span className="text-light"> tarihinden itibaren</span></h2>
              <h2 className="mt-4 font-bold tracking-tight text-light sm:text-3xl">Toplanan Bağış: <span className="text-ahbap">$470.635,00</span></h2>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://ahbap.org/bagisci-ol"
                  className="rounded-md bg-ahbap px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  Bağış Yap
                </a>
                <a href="https://linktr.ee/depremyayini" className="text-base font-semibold leading-7 text-gray-300">
                  Daha fazlası için <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}