const examples = [
  {
    ar: "انهف ما يحب البيتزا",
    en: "Inahuf doesn't like pizza",
    role: "فاعل — Subject",
  },
  {
    ar: "قاللف صديقفي إن الأمور بخير",
    en: "Their friend told them things are fine",
    role: "مضاف إليه + مفعول — Possessive + Object",
  },
  {
    ar: "شفتف البارح",
    en: "I saw them yesterday",
    role: "ضمير متصل — Attached pronoun",
  },
  {
    ar: "هذا الكتاب مالف",
    en: "This book is theirs",
    role: "ملكية — Possessive",
  },
];

const conjugation = [
  {
    functionAr: "انهف",
    functionEn: "Independent pronoun",
    form: "انهف",
    exampleAr: "انهف راح المدرسة",
    exampleEn: "Inahuf went to school",
  },
  {
    functionAr: "ـف",
    functionEn: "Attached (object)",
    form: "ـف",
    exampleAr: "ساعدف / كلّمف",
    exampleEn: "Helped them / Talked to them",
  },
  {
    functionAr: "لف",
    functionEn: "Preposition",
    form: "لف",
    exampleAr: "قلتلف / عطيتلف",
    exampleEn: "I told them / I gave them",
  },
  {
    functionAr: "صديقفي",
    functionEn: "Possessive",
    form: "ـفي",
    exampleAr: "بيتفي / أهلفي",
    exampleEn: "Their house / Their family",
  },
  {
    functionAr: "فـ",
    functionEn: "Verb conjugation",
    form: "فـ (prefix)",
    exampleAr: "فحب / فروح / فيجي",
    exampleEn: "They love / They go / They come",
  },
];

export default function GrammarSection() {
  return (
    <section id="grammar" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="font-arabic rtl">كيف يتصرّف في الجملة</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">
          How it works in a sentence
        </p>

        {/* Examples */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-medium text-accent mb-3 uppercase tracking-wider">
                {ex.role}
              </div>
              <div className="font-arabic text-xl rtl text-gray-800 mb-2">
                {ex.ar}
              </div>
              <div className="text-sm text-gray-500">{ex.en}</div>
            </div>
          ))}
        </div>

        {/* Conjugation Table */}
        <h3 className="text-2xl font-bold text-center mb-2">
          <span className="font-arabic rtl">جدول التصريف</span>
        </h3>
        <p className="text-center text-gray-400 mb-8">Conjugation Table</p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Function
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 font-arabic">
                  الشكل
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 font-arabic rtl">
                  مثال
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {conjugation.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.functionEn}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-violet-100 text-accent font-bold font-arabic px-3 py-1 rounded-lg text-lg">
                      {row.form}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-arabic text-gray-800 rtl">
                    {row.exampleAr}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {row.exampleEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Practical Note */}
        <div className="mt-12 bg-violet-50 rounded-2xl p-8 text-center">
          <h4 className="font-bold text-accent mb-3 font-arabic text-lg rtl">
            ملاحظة عملية
          </h4>
          <p className="font-arabic rtl text-gray-700 leading-relaxed mb-4">
            مثل أي ضمير جديد، ممكن يحتاج وقت حتى يصير طبيعي على اللسان — وهذا
            عادي. الاستخدام المتكرر في محادثات يومية بسيطة هو أسرع طريقة لتعلّمه.
            لو ارتكبت غلطة، صحّح وكمّل — ما في داعي لأي ضجة.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Like any new pronoun, it may take time to feel natural — and
            that&apos;s okay. Using it regularly in simple daily conversations is
            the fastest way to learn. If you make a mistake, correct yourself and
            move on — no fuss needed.
          </p>
        </div>
      </div>
    </section>
  );
}
