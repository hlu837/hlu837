import { Link } from "react-router-dom";

const PoemSection = () => {
  const allPoems = [
    "Lost chance",
    "Sarah's laugh", 
    "My door",
    "Fate",
    "What if",
    "It's not about you",
    "children",
    "ሀና ሆይ",
    "Judas's mindset",
    "illusion",
    "figure it out",
    "say it out",
    "As david said",
    "Oh God", 
    "what matters",
    "For what do you know me",
    "Transgression",
    "But we",
    "insanity",
    "do something",
    "New tomorrow"
  ];

  const favoritePoem = `"play with fire"... "Don't play with fire"\n
Either you will burn or end up frozen.\n
what is the point of fire if we ain't play with it.\n
"Just keep it balanced".\n
As simple as life is that's the best advice.\n
The commandment:\n
An eye for an eye\n
Word for word\n
But what do we do with the blind?\n
How are we suppose to kill the dead!`;

  return (
    <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 py-6 lg:py-10 gap-6 lg:gap-8">
      <div className="flex-1">
        <div className="bg-poetry-content-bg rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] shadow-soft text-base sm:text-lg lg:text-xl font-semibold leading-tight py-4 sm:py-5 px-6 sm:px-8 lg:px-10 mb-4 lg:mb-6 text-center">
          Chose what you think you'll Love
        </div>
        <div className="text-sm sm:text-base lg:text-lg font-semibold leading-relaxed">
          {allPoems.map((poem, index) => (
            <Link 
              key={index} 
              to={`/poems?poem=${encodeURIComponent(poem.toLowerCase().replace(/\s+/g, '-'))}`}
              className="block cursor-pointer hover:text-poetry-blue transition-colors mb-1 px-2"
            >
              {index + 1}. {poem}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="flex-1 lg:ml-20">
        <div className="text-base sm:text-lg lg:text-xl font-semibold mb-4 lg:mb-5 text-center lg:text-left">
          This is my favorite one
        </div>
        <div className="bg-poetry-content-bg text-sm sm:text-base lg:text-lg font-semibold leading-tight p-4 sm:p-6 lg:p-9 whitespace-pre-line">
          {favoritePoem}
        </div>
      </div>
    </div>
  );
};

export default PoemSection;
