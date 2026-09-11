import React from 'react';
import heroImage from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
              <div className="grid grid-cols-1 items-center lg:ml-20 lg:gap-20 gap-2 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
                    Build Your Ideal
                    <br />
                    <span className="text-gradient-brand">Development Stack</span>
                  </h1>
        
                  <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg lg:mx-0">
                    Explore frontend, backend, database, and tooling options, compare them side by
                    side, and put together the stack that fits your next project.
                  </p>
        
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <button
                      className="rounded-lg bg-gradient-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-sm cursor-pointer"
                    >
                      Explore Technologies
                    </button>
                    <button
                      className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:border-slate-400 cursor-pointer"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
        
                <div className="flex justify-center">
                  <img
                    src={heroImage}
                    alt=""
                    className="w-full max-w-md drop-shadow-2xl"
                  />
                </div>
              </div>
            </section>
    );
};

export default Hero;