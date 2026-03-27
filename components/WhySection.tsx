export default function WhySection() {
  return (
    <section id="why" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="font-arabic rtl">ليش نحتاج ضمير جديد؟</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Why do we need a new pronoun?
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Arabic */}
          <div className="rtl font-arabic text-lg leading-relaxed text-gray-700 bg-gray-50 rounded-2xl p-8">
            <p>
              العربية فيها ضمائر مؤنثة ومذكرة وجمع — بس ما فيها ضمير لشخص ما
              يتعرّف على هذي التصنيفات.
            </p>
            <p className="mt-4">
              <span className="pronoun-highlight font-bold text-xl">انهف</span>{" "}
              هو ضمير مبتكر يملأ هالفراغ. ما يحمل جنسًا، وما مستعار من أي فئة
              موجودة — يعني هو حقيقي ونظيف.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              حرف الـ <span className="pronoun-highlight">ف</span> مختار لأنه ما
              يحمل أي جنس في العربية — أرضية بيضاء.
            </p>
          </div>

          {/* English */}
          <div className="text-lg leading-relaxed text-gray-700 bg-gray-50 rounded-2xl p-8">
            <p>
              Arabic has feminine, masculine, and plural pronouns — but no
              pronoun for someone who doesn&apos;t identify with these
              categories.
            </p>
            <p className="mt-4">
              <span className="pronoun-highlight font-bold text-xl">Inahuf</span>{" "}
              is an innovative pronoun that fills this gap. It carries no gender
              and isn&apos;t borrowed from any existing category — making it
              authentic and clean.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              The letter <span className="pronoun-highlight">ف (f)</span> was
              chosen because it carries no gendered meaning in Arabic — a blank
              slate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
