import React from "react";

const AboutUs = () => {
  return (
    <div class="container mt-32 mx-auto p-4 md:p-0">
      <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
        <div class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
          <img src="https://firebasestorage.googleapis.com/v0/b/bito-b4105.appspot.com/o/131217146_4100893749939702_6644574557095375830_n.jpeg?alt=media&token=28ff89a1-3b2d-46d8-a809-dfc48c7622b7" alt="picture oscar" layout="responsive"/>
          <div class="absolute text-xl">
            <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
          </div>
        </div>

        <div class="bg-white w-full md:w-2/3">
          <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
              <div class="w-full lg:w-1/5 text-sm lg:border-right lg:border-solid text-center md:text-left">
                Oscar Cortes Reyna
                <p class="mb-0 mt-3 text-grey-dark text-sm italic">
                  C.Eng.,ENV SP, PM, Msc
                </p>
              </div>

              <div class="w-full lg:w-3/5 lg:px-3">
                <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                  US and Mexico highly experience (+30 years) Infrastructure
                  Senior Project Manager Chartered Civil Engineer and PPP
                  consultant expert experienced Transportation professional with
                  a demonstrated history of working in the government
                  transportation industry. Skilled in construction contract
                  management, dispute resolution, transportation asset
                  management, transportation funding and strategic planning.
                  Proven leadership and change management, building teams that
                  deliver quality, safe, efficient, and reliably functional
                  transportation networks through innovative solutions with
                  history of effective leadership for major Engineering
                  initiatives. With proven ability to coordinate owners, project
                  team members, contractors and regulatory officials to assure
                  the on-time, cost effective achievement of contractual goals,
                  successfully participated in all phases of the project
                  delivery process for major transportation and infrastructure
                  projects with vast experience in project controls & Claims
                  Management, value engineering methodologies and
                  constructability review process & Public-Private Partnerships
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
