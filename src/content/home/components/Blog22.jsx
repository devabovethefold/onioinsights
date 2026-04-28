"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const useRelume = ({ defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const isActive = (tabValue) => {
    return activeTab === tabValue ? 1 : 0;
  };

  return {
    activeTab,
    setActiveTab,
    isActive,
  };
};

export function Blog22() {
  const useActive = useRelume({ defaultValue: "view-all" });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Results</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Featured case studies
            </h1>
            <p className="md:text-md">
              Real businesses. Real growth. Real proof.
            </p>
          </div>
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-center gap-6 md:mb-16 md:grid-cols-2 md:gap-12">
          <a href="#" className="w-full">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image"
              className="aspect-[3/2] size-full object-cover"
            />
          </a>
          <div className="flex h-full flex-col items-start justify-center">
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Case study
              </p>
              <p className="inline text-sm font-semibold">4 min read</p>
            </div>
            <a className="mb-2" href="#">
              <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                Miami retail brand tripled organic revenue
              </h3>
            </a>
            <p>From invisible to industry leader in nine months</p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
        </div>
        <Tabs
          value={useActive.activeTab}
          onValueChange={useActive.setActiveTab}
          className="flex flex-col justify-center"
        >
          <TabsList className="no-scrollbar mb-12 flex w-full items-center justify-start overflow-auto md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="view-all"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              View all
            </TabsTrigger>
            <TabsTrigger
              value="category-one"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              E-commerce
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Local
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              B2B
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Tech startup dominated their niche with SEO
                  </h2>
                </a>
                <p>Went from zero to 40K monthly organic visitors</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Legal firm became the go-to authority
                  </h2>
                </a>
                <p>Qualified leads increased by 280 percent</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    National e-commerce brand cut customer acquisition cost
                  </h2>
                </a>
                <p>Organic now drives 60 percent of total revenue</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    South Florida service business booked more clients
                  </h2>
                </a>
                <p>Local rankings and organic traffic both doubled</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Tech startup dominated their niche with SEO
                  </h2>
                </a>
                <p>Went from zero to 40K monthly organic visitors</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Legal firm became the go-to authority
                  </h2>
                </a>
                <p>Qualified leads increased by 280 percent</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    National e-commerce brand cut customer acquisition cost
                  </h2>
                </a>
                <p>Organic now drives 60 percent of total revenue</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    South Florida service business booked more clients
                  </h2>
                </a>
                <p>Local rankings and organic traffic both doubled</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Tech startup dominated their niche with SEO
                  </h2>
                </a>
                <p>Went from zero to 40K monthly organic visitors</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Legal firm became the go-to authority
                  </h2>
                </a>
                <p>Qualified leads increased by 280 percent</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    National e-commerce brand cut customer acquisition cost
                  </h2>
                </a>
                <p>Organic now drives 60 percent of total revenue</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    South Florida service business booked more clients
                  </h2>
                </a>
                <p>Local rankings and organic traffic both doubled</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Tech startup dominated their niche with SEO
                  </h2>
                </a>
                <p>Went from zero to 40K monthly organic visitors</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Legal firm became the go-to authority
                  </h2>
                </a>
                <p>Qualified leads increased by 280 percent</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    National e-commerce brand cut customer acquisition cost
                  </h2>
                </a>
                <p>Organic now drives 60 percent of total revenue</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    South Florida service business booked more clients
                  </h2>
                </a>
                <p>Local rankings and organic traffic both doubled</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-four"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Tech startup dominated their niche with SEO
                  </h2>
                </a>
                <p>Went from zero to 40K monthly organic visitors</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    Legal firm became the go-to authority
                  </h2>
                </a>
                <p>Qualified leads increased by 280 percent</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    National e-commerce brand cut customer acquisition cost
                  </h2>
                </a>
                <p>Organic now drives 60 percent of total revenue</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-video size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Case study
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  className="mb-2 flex w-full flex-col items-start justify-start"
                  href="#"
                >
                  <h2 className="text-xl font-bold md:text-2xl">
                    South Florida service business booked more clients
                  </h2>
                </a>
                <p>Local rankings and organic traffic both doubled</p>
                <Button
                  title="Read more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
