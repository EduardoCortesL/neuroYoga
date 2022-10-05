import React from "react";

import Card from "./utility/card";

const More = (props) => {
  const data = props.data;

  return (
    <div className="flex flex-wrap items-center items-stretch justify-around max-w-7xl mt-6 sm:w-full">
      <a href=""
        className="p-6 mt-6 border w-96 rounded-xl hover:text-yoga-green focus:text-yoga-green">
        <h3 className="text-2xl font-bold text-center">Concetta Forchetti MD</h3>
        <p className="mt-4 text-xl text-center">
          <code>PhD Medical Director Memory Disorder Clinic and Clinical Research</code>
        </p>
        <p className="mt-2 text-center">
          "As a neurologist, specializing in degenerative brain disorders, I recognize the importance of physical activity and mindfulness
          as fundamental to preserve and strengthen neural pathways.
          <br></br>
          Yet, not all physical activities are the same and even within yoga, not all practices are as beneficial as it requires sound
          knowledge of brain functions, spine anatomy and body alignment to design an individualized treatment plan directed to the individual specific needs.
          <br></br>
          Izzy of Neuro-Yoga acquired this knowledge and devoted her yoga practice and teaching to improve symptoms and lifestyle of individuals.
          <br></br>
          I strongly recommend my patients to consider a treatment plan with Neuro-Yoga as one of the most effective ways to improve
          their medical conditions but, her practice is beneficial for all individuals regardless of ability or need."
          <p className="mb-0 mt-3 text-grey-dark text-sm italic">
            - Concetta Forchetti MD
          </p>
        </p>
      </a>

      <a href=""
        className="p-6 mt-6 border w-96 rounded-xl hover:text-yoga-green focus:text-yoga-green">
        <h3 className="text-2xl font-bold text-center">Konstantinos Kostas</h3>
        <p className="mt-4 text-xl">
          <code>PhD Clinical Health Psychologist</code>
        </p>
        <p className="mt-2 text-center">
          "Originating  in India 5000 years ago, Yoga is now considered to be a first-line  therapy for chronic pain, high blood pressure and elevated
          blood sugars.  Yoga is the science of unifying the mind, body and breath and is known  to benefit all genders and ages.  Although more experienced
          yogi’s practice for up to 2 hours at a time, others find that by simply  practicing 5 minutes a day, they feel more self-aware and relaxed.
          <br></br>
          Whether  you are new to yoga or are looking for a way to refresh your practice, I  highly recommend scheduling a session with Izzy Gandarilla,
          the founder  and studio director of Neuro Yoga Institute.  I’ve had the  pleasure of working with Izzy in a number of capacities over the last
          10 years and, in that time, have watched her develop into a leader  within Chicagoland’s yogic community.  Izzy’s knowledge of the relationship
          between the mind and body is complemented by her compassionate and gentle approach.  Not  only have I benefited from her teachings, but I have
          come to appreciate  her innate capacity to connect with others as they too developed a more  centered approach to life."
        </p>
        <p className="mb-0 mt-3 text-grey-dark text-sm italic">
          - Konstantinos Kostas PhD
        </p>
      </a>

      <a
        href=""
        className="p-6 mt-6 border w-96 rounded-xl hover:text-yoga-green focus:text-yoga-green" >
        <h3 className="text-2xl font-bold text-center">Ankur Dave</h3>
        <p className="mt-4 text-xl text-center">
          <code>CMD Pain Medicine specialist</code>
        </p>
        <p>"As a pain management physician, I am always stressing the importance of yoga as a first-line option to treat and prevent chronic pain.
          Understandably, a lot of my patients have doubts and questions, like "I don't think I can do all that" or "how do I know this won't worsen my pain?"
          I always tell them, yoga is for everyone, no matter the skill or ability. The single most important factor in experiencing the health benefits of yoga
          is working with highly trained yoga teachers who treat and understand the individual. Izzy does just that. She's able to make a connection with
          my patients and meet them at their level. Then she guides them through yoga, both as a physical exercise as well as the mind-body aspect.
          My patients who have worked with Izzy have all seen improvements in their function, mood, and abilities. I give her my highest recommendation."
          <p className="mb-0 mt-3 text-grey-dark text-sm italic">
            - Ankur Dave
          </p>
        </p>
      </a>
    </div>
  );
};

export default More;
