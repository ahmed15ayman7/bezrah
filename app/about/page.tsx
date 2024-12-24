"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import axios from "axios";
import gsap from "gsap";
import { projectsData, dataAbout, galleryImages } from "@/constants";
type Video = {
  snippet: {
    title: string;
    description: string;
    resourceId: {
      videoId: string;
    };
  };
};

const About = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [showCount, setShowCount] = useState(4); // بدءاً بعرض 4 فيديوهات فقط

  const handleShowMore = () => {
    setShowCount(showCount + 4); // زيادة عدد الفيديوهات المعروضة
  };

  const [expandedStates, setExpandedStates] = useState<boolean[]>([]);
  // Fetch YouTube playlist videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: "snippet",
              playlistId: "PLIKne7hLGhsW-8plsxePbdlZcWQ3z-SyN", // ضع ID قائمة التشغيل هنا
              maxResults: 10,
              key:
                process.env.YOUTUBE_API_KEY ||
                "AIzaSyD266vSuiWuwUVVwp7phCXSH_Z3Emg9Wfk", // ضع مفتاح API الخاص بك هنا
            },
          }
        );
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };
    fetchVideos();
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      ".content-section",
      { opacity: 0, y: 50 },
      { opacity: 1, stagger: 0.3, duration: 1, ease: "power4.out" }
    );
  }, []);
  const toggleExpand = (index: number) => {
    setExpandedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        {/* Header Section */}
        <div className="content-section mb-16 px-4 md:px-8 lg:px-16">
          <div className="text-center">
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold  text-gray-900 leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="mt-6 text-base md:text-lg text-left text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              We are a passionate group of Egyptian youth turning our knowledge
              into practical solutions for our community. Our mission is to
              promote sustainability and improve the quality of life by blending
              expertise from architecture, agriculture, engineering, and
              technology. We start with a solid foundation of scientific
              research, transforming complex ideas into simple, accessible
              educational content for our audience. Beyond education, we also
              create practical products that align with our vision of a greener,
              more sustainable future.
            </motion.p>
            <motion.p
              className="mt-6 text-base md:text-lg text-left text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              By empowering local communities, preserving the environment, and
              boosting income opportunities through urban farming and
              sustainable building practices, BEZRAH bridges the gap between
              knowledge and action. Our ultimate goal is to inspire change,
              foster environmental stewardship, and contribute to a brighter,
              more sustainable Egypt.
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataAbout.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-left">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4"></div>
            </motion.div>
          ))}
        </div>

        {/* Activities Section */}

        <div className="content-section mt-16">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our Activities
          </h2>
          <div className="mt-8 space-y-8">
            {videos.slice(0, showCount).map((video, index) => {
              // Extract description and split into limited words
              const wordsLimit = 20;
              const description = video.snippet.description || "";
              const words = description.split(" ");
              const truncatedDescription =
                words.length > wordsLimit
                  ? words.slice(0, wordsLimit).join(" ") + "..."
                  : description;

              const formattedDescription = truncatedDescription.replace(
                /#(\w+)/g,
                `<span class="text-gray-900 font-bold">#$1</span>`
              );

              const formattedLinks = formattedDescription.replace(
                /(https?:\/\/[^\s]+)/g,
                `<a href="$1" target="_blank" rel="noopener noreferrer" class="text-[#a0b59f] underline">$1</a>`
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }} // Animation: starts hidden and moves up
                  animate={{ opacity: 1, y: 0 }} // Animation: becomes visible and moves to position
                  transition={{ duration: 0.5 }} // Animation duration
                  className={`flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center gap-6 bg-gray-50 shadow-lg rounded-lg p-6`}
                >
                  <div className="w-1/2">
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="w-1/2 text-left">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {video.snippet.title}
                    </h3>
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }} // حركة الظهور عند التحميل
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className={`text-gray-500 mt-2 overflow-hidden transition-all duration-[3s]`}
                        style={{
                          maxHeight: expandedStates[index] ? "1000px" : "100px", // يتحكم في ارتفاع النص
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)", // انتقال سلس
                        }}
                      >
                        <p
                          dangerouslySetInnerHTML={{
                            __html: expandedStates[index]
                              ? description.replace(
                                  /(https?:\/\/[^\s]+)/g,
                                  `<a href="$1" target="_blank" rel="noopener noreferrer" class="text-[#a0b59f] underline">$1</a>`
                                )
                              : formattedLinks,
                          }}
                        ></p>
                      </div>
                    </motion.div>
                    {words.length > wordsLimit && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Button
                          onClick={() => toggleExpand(index)}
                          variant="contained"
                          sx={{
                            mt: 4,
                            backgroundColor: "#8a9c7a",
                            color: "white",
                            "&:hover": { backgroundColor: "#a0b59f" },
                            fontSize: "16px",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.3s ease-in-out",
                          }}
                        >
                          {expandedStates[index] ? (
                            <span>
                              Show less <i className="ml-1">&#9650;</i>
                            </span>
                          ) : (
                            <span>
                              Show more <i className="ml-1">&#9660;</i>
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
            {videos.length > showCount && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  onClick={handleShowMore}
                  variant="contained"
                  sx={{
                    mt: 4,
                    backgroundColor: "#8a9c7a",
                    color: "white",
                    "&:hover": { backgroundColor: "#a0b59f" },
                    fontSize: "16px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Show More
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Projects Section */}
        <div className="content-section mt-16">
          <h2 className="text-4xl font-semibold text-gray-900">Our Projects</h2>
          <div className="mt-8 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-500 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
