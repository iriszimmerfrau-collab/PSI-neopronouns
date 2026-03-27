import { stories } from "@/data/stories";
import StoryCard from "./StoryCard";

export default function StoriesSection() {
  return (
    <section id="stories" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="font-arabic rtl">قصص</span>
        </h2>
        <p className="text-center text-gray-400 mb-4">Stories</p>
        <p className="text-center text-sm text-gray-500 max-w-lg mx-auto mb-16">
          Short stories that bring{" "}
          <span className="pronoun-highlight font-arabic">انهف</span> to life —
          inspired by themes from English LGBT literature, reimagined in Arabic.
        </p>

        <div className="space-y-4">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
