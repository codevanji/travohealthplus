import React, { useState } from 'react';

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Patient Journey",
      description: "Experience the seamless care journey with Travo Health+",
      url: "/Videos/VIDEO-2025-03-17-01-30-58.mp4",
      thumbnail: "/images/videocoverpage/coverpage2.jpg" // Using existing image as thumbnail
  
    },
    {
      id: 2,
      title: "Our Services",
      description: "Discover our comprehensive healthcare solutions",
      url: "/Videos/VIDEO-2025-03-17-01-30-58.mp4",
      thumbnail: "/images/videocoverpage/coverpage3.jpg" // Using existing image as thumbnail
    }
  ];

  const handleVideoClick = (videoId) => {
    setActiveVideo(activeVideo === videoId ? null : videoId);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-3xl lg:text-4xl leading-relaxed tracking-[0.2em] font-light text-gray-900 text-center text-white mb-6">Experience Our Journey</h2>
        <p className="text-base md:text-lg lg:text-xl sm:text-md  text-[#4A4A4A] leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-light
                        xl:leading-[2.5rem] 
                        px-4 lg:px-0
                        text-left md:text-center
                        text-white"
                    >
            Watch how we transform healthcare experiences and create success stories for our patients
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              {/* Video Container */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800 shadow-xl">
                {activeVideo === video.id ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    src={video.url}
                  />
                ) : (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Play Button Overlay */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 cursor-pointer"
                      onClick={() => handleVideoClick(video.id)}
                    >
                      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Video Info */}
              <div className="mt-4">
                <h3 className="text-3xl md:text-lg lg:text-xl leading-relaxed tracking-[0.2em] font-light text-gray-900 text-left text-white mb-6">{video.title}</h3>
                <p className="text-base sm:text-md text-white leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-light
                        xl:leading-[2rem] 
                        px-4 lg:px-0"
                    >{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="relative
                    mx-auto
                    block
                    w-64
                    rounded-full
                    bg-gradient-to-r
                    from-primary
                    to-[#0891b2]
                    px-6
                    py-3
                    text-lg
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    ease-in-out
                    hover:scale-105
                    hover:shadow-[0_0_20px_rgba(109,148,198,0.4)]
                    active:scale-95">
            Watch More Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
