"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const TabItem = () => {
  if (index !== activeTab) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative top-0 bottom-0 right-0 left-auto flex items-center justify-center size-full md:absolute md:w-1/2 md:pl-6 lg:pl-10"
    >
      {tabItem.image && (
        <img
          src={tabItem.image.src}
          alt={tabItem.image.alt}
          className="size-full"
        />
      )}
      {tabItem.video && (
        <Dialog>
          <DialogTrigger className="relative flex items-center justify-center w-full">
            <img
              src={tabItem.video.image.src}
              alt={tabItem.video.image.alt}
              className="object-cover size-full"
            />
            <FaCirclePlay className="absolute z-20 text-white size-16" />
            <span className="absolute inset-0 z-10 bg-black/50" />
          </DialogTrigger>
          <DialogContent>
            <VideoIframe video={tabItem.video.url} />
          </DialogContent>
        </Dialog>
      )}
    </motion.div>
  );
};

const useRelume = () => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabSetter = (index) => () => setActiveTab(index);
  const getActiveTabButtonStyles = (index) => {
    return clsx("cursor-pointer border-b border-border-primary py-4", {
      "opacity-100": activeTab === index,
      "opacity-25": activeTab !== index,
    });
  };
  const getActiveTabButtonContentStyles = (index) => {
    return {
      height: activeTab === index ? "auto" : 0,
      opacity: activeTab === index ? 1 : 0,
    };
  };
  return {
    setActiveTabSetter,
    getActiveTabButtonStyles,
    getActiveTabButtonContentStyles,
    activeTab,
  };
};

export function Layout493() {
  const useActive = useRelume();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative">
          <div className="w-full pr-0 md:w-1/2 md:pr-6 lg:pr-10">
            <div className="mb-8 w-full md:w-auto">
              <p className="mb-3 font-semibold md:mb-4">Tagline</p>
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Medium length section heading goes here
              </h1>
              <p className="md:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div className="static flex flex-col flex-wrap justify-stretch md:block">
              <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
                <div
                  onClick={useActive.setActiveTabSetter(0)}
                  className={useActive.getActiveTabButtonStyles(0)}
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Short heading goes here
                  </h2>
                  <motion.div
                    initial={false}
                    animate={useActive.getActiveTabButtonContentStyles(0)}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </motion.div>
                </div>
                <div
                  onClick={useActive.setActiveTabSetter(1)}
                  className={useActive.getActiveTabButtonStyles(1)}
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Short heading goes here
                  </h2>
                  <motion.div
                    initial={false}
                    animate={useActive.getActiveTabButtonContentStyles(1)}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </motion.div>
                </div>
                <div
                  onClick={useActive.setActiveTabSetter(2)}
                  className={useActive.getActiveTabButtonStyles(2)}
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Short heading goes here
                  </h2>
                  <motion.div
                    initial={false}
                    animate={useActive.getActiveTabButtonContentStyles(2)}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </motion.div>
                </div>
              </div>
              <AnimatePresence initial={false}>
                <TabItem
                  tabItem={{
                    heading: "Short heading goes here",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                      alt: "Relume placeholder image 1",
                    },
                  }}
                  index={0}
                  activeTab={useActive.activeTab}
                />
                <TabItem
                  tabItem={{
                    heading: "Short heading goes here",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
                    video: {
                      image: {
                        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
                        alt: "Relume placeholder image 2",
                      },
                      url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
                    },
                  }}
                  index={1}
                  activeTab={useActive.activeTab}
                />
                <TabItem
                  tabItem={{
                    heading: "Short heading goes here",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
                      alt: "Relume placeholder image 3",
                    },
                  }}
                  index={2}
                  activeTab={useActive.activeTab}
                />
              </AnimatePresence>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Button" variant="secondary">
                Button
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
