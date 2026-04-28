"use client";

import React from "react";

export function Stats58() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Results</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Numbers that matter
          </h1>
          <p className="md:text-md">
            Average performance across all active campaigns
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-[0.5fr_1fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex flex-col justify-center gap-x-6 gap-y-6 md:flex-row md:gap-y-8 lg:flex-col lg:gap-x-8">
            <div className="flex w-full flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                247%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Average traffic increase
              </h3>
            </div>
            <div className="flex w-full flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                89%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                First-page ranking rate
              </h3>
            </div>
            <div className="flex w-full flex-col justify-center border border-border-primary p-8 text-center">
              <p className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                156
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Businesses transformed
              </h3>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg"
              alt="Relume placeholder image"
              className="aspect-[3/2] size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
