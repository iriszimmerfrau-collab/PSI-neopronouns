export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="text-center max-w-3xl">
        <h1 className="text-7xl md:text-9xl font-bold font-arabic gradient-text mb-6">
          انهف
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-arabic mb-3 rtl">
          ضمير محايد جديد للغة العربية
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-4">
          A new gender-neutral pronoun for Arabic
        </p>
        <p className="text-sm text-accent font-arabic rtl">
          للمجتمع المتنوع ✦ For the diverse community
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#why"
            className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-colors"
          >
            Learn More
          </a>
          <a
            href="#stories"
            className="px-8 py-3 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
          >
            Read Stories
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
