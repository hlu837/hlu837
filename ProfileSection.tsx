import profilePhoto from "@/assets/profile-photo.png";

const ProfileSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 lg:px-10 py-6 lg:py-10 items-center">
      <div className="gradient-profile rounded-full shadow-soft border-4 sm:border-[7px] border-white p-6 sm:p-8 lg:p-12 w-fit">
        <div 
          className="rounded-full shadow-soft h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${profilePhoto})` }}
        />
      </div>
      <div className="gradient-welcome rounded-xl shadow-soft border border-poetry-blue-light font-just-me text-base sm:text-lg lg:text-2xl leading-tight p-4 sm:p-5 max-w-lg text-center lg:text-left">
        Welcome to my corner of the internet!<br />
        I won't waste your time with long greetings,<br />
        i hope you find it interesting. Feel free to<br />
        help yourself! since my world revolves around<br />
        GOD, I don't mind if you leave if you don't<br />
        find it engaging. Let's dive in!
      </div>
    </div>
  );
};

export default ProfileSection;