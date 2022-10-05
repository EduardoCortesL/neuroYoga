import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-32 mx-auto p-4 md:p-0">
      <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
        <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
          <img src="https://firebasestorage.googleapis.com/v0/b/bitotestsites.appspot.com/o/neuro_yoga_pp.webp?alt=media&token=5dca776e-54c2-4d88-9321-edcfc27dc514" alt="picture yoga" layout="responsive"/>
          <div className="absolute text-xl">
            <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
          </div>
        </div>

        <div className="bg-white w-full md:w-2/3">
          <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
              <div className="w-full text-center lg:w-1/5 text-lg lg:border-right lg:border-solid ">
                Izzy Gandarilla
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                  Founder & Owner
                </p>
              </div>

              <div className="w-full lg:w-3/5 lg:px-3">
                <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                My journey to becoming a professional yoga instructor began at the Chicago marathon in 2005. Hardly training for the event, 
                I suffered a knee injury, which persisted for months. Working as a medical professional, I tried physical therapy, but it did not help much,
                 yet I assumed it was the only option and I would have to manage the pain. Until one day a friend suggested I try yoga with her. 
                 That first class had me hooked and totally took away my knee pain.
                  <br></br>
                 Having experienced the healing power of yoga, I wanted to help spread the power of yoga and quickly learned yoga was more than just poses. 
                 I began to study all facets of yoga such as breathing techniques, meditation, and philosophy along with the poses, which led to an even deeper 
                 spiritual awakening. This awakening pushed me to see how western medical practices could blend with yoga methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
