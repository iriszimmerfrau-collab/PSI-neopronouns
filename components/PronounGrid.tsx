const pronouns = [
  {
    pronoun: "انها",
    typeAr: "مؤنث",
    typeEn: "Feminine",
    color: "bg-pink-50 border-pink-200",
    textColor: "text-pink-600",
  },
  {
    pronoun: "انهو",
    typeAr: "مذكر",
    typeEn: "Masculine",
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-600",
  },
  {
    pronoun: "انهم",
    typeAr: "جمع / محايد",
    typeEn: "Plural / Neutral",
    color: "bg-gray-50 border-gray-200",
    textColor: "text-gray-600",
  },
  {
    pronoun: "انهف",
    typeAr: "جديد ✦",
    typeEn: "New ✦",
    color: "bg-violet-50 border-violet-300",
    textColor: "text-accent",
    highlight: true,
  },
];

export default function PronounGrid() {
  return (
    <section id="pronouns" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="font-arabic rtl">الضمائر الأربعة</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">The Four Pronouns</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pronouns.map((p) => (
            <div
              key={p.pronoun}
              className={`rounded-2xl border-2 p-8 text-center transition-all hover:scale-105 ${
                p.color
              } ${p.highlight ? "ring-2 ring-accent ring-offset-2 shadow-lg" : ""}`}
            >
              <div
                className={`text-4xl md:text-5xl font-bold font-arabic mb-4 ${p.textColor}`}
              >
                {p.pronoun}
              </div>
              <div className="font-arabic text-sm text-gray-600">
                {p.typeAr}
              </div>
              <div className="text-xs text-gray-400 mt-1">{p.typeEn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
