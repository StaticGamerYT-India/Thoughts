import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicator,
} from "@/components/ui/carousel";
import Image from "next/image";


function Startups() {
  const startups = [
    {
      name: "Pilot",
      description: "First time Windows XP Experience",
      traction: "My sister used to go to computer classes, she would come back home and teach me the same things.",
      website: "https://google.com",
      content: "https://cn.i.cdn.ti-platform.com/cnapac/content/701/showpage/we-bare-bears/sa/showsquare.png",
      timeRange: "2013 - 2014",
    },
    {
      name: "Ben 10 Addict",
      description: "Ben 10 was one of my faviourite cartoons",
      traction: "My sister taught me how to type cartoon network and watch Ben 10 episodes",
      website: "https://google.com",
      content: "https://i.ytimg.com/vi/AkPyHAbmjb4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCcgWihyMA8=&rs=AOn4CLAPDXDtGHgwL0dGqHnHYoKP0Iu1cw",
      timeRange: "2014 - 2015",
    },
    {
      name: "In Love with GOOGLE and Youtube",
      description: "The episodes redirected to youtube and google",
      traction: "I fell in love with youtube when it started reccomending tech and 'how to' videos ",
      website: "https://youtube.com",
      content: "https://i.ytimg.com/vi/yIqChK4CkGg/maxresdefault.jpg",
      timeRange: "2016 - 2019",
    },
    {
      name: "Ab?",
      description: "After 2019, I lost interest in everything",
      traction: "I still follow my passion but due to acedemic and social depression, I've lost interest in coding and basic humane happiness.",
      website: "https://google.com",
      content: "https://i.pinimg.com/474x/60/13/3a/60133ad896b4cf405fa05ad9637db00f.jpg",
      timeRange: "2019 - 2024",
    },
    // {
    //   name: "Qusion",
    //   description: "Web & Mobile Sudio",
    //   website: "https://google.com",
    //   traction: "TODO",
    //   content: "https://arc.net/og.png",
    //   timeRange: "2021 - 2023",
    // },
  ];

  return (
    <Carousel itemCount={startups.length} className="w-full mb-16 sm:mb-20 md:mb-24">
      <CarouselContent className="-ml-1 md:-ml-2">
        {startups.map((startup, index) => (
          <CarouselItem key={index} className="pl-1 md:pl-2">
            <div className="p-1 relative group rounded-md overflow-hidden">
              {startup.content.endsWith('.mp4') ? (
                <video
                  src={startup.content}
                  className="w-full h-auto object-cover transition duration-500 ease-in-out rounded-lg"
                  loop
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={startup.content}
                  alt={startup.name}
                  className="w-full h-auto object-cover transition duration-500 ease-in-out rounded-lg"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex flex-col justify-between p-3 sm:p-6">
                <div className="transition-opacity duration-500">
                  <h2 className="text-lg sm:text-xl pb-1 font-semibold text-zinc-200 tracking-tighter">
                    {startup.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-200 line-clamp-2">
                    {startup.description}
                  </p>
                </div>
                <div className="transition-opacity duration-500">
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {startup.timeRange}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-200 line-clamp-3">
                    {startup.traction}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex justify-center items-center text-zinc-500 bg-black border-zinc-500" />
      <CarouselNext className="hidden md:flex justify-center items-center text-zinc-500 bg-black border-zinc-500" />
    </Carousel>
  )
}

export default Startups;
