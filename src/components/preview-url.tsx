import Image from 'next/image'

function PreviewUrl( {contentImg, website}: {contentImg: string, website: string} ) {
  const getBaseUrl = (url: string) => new URL(url).hostname;

  return (
    <div className="relative mb-2 w-full h-auto min-h-[200px] md:min-h-[300px]">
      <Image
        src={contentImg}
        alt={website}
        fill
        className="rounded hover:ring-2 hover:ring-zinc-500 transition-all object-cover"
      />
      <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs p-1 rounded-md">
        {getBaseUrl(website)}
      </div>
    </div>
  );
}

export default PreviewUrl;
