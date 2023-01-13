import React, { useState } from "react";
import { storiesLink } from "../../data/StoriesData";
import StoriesCard from "./StoriesCard";
import { motion } from 'framer-motion';
import { staggerContainer } from "../framer/FramerMotion";




const Stories = () => {
  const [active, setActive] = useState("stories-4");

  return (
    <section className="container mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
       className="flex flex-col">
        <h1 className="text-2xl capitalize">
          what others have to say about us
        </h1>
        <div className="my-10 flex flex-col gap-y-5 items-center justify-center md:flex-row gap-x-1 min-h-[70vh]">
          {storiesLink.map((stories, id) => (
            <>
              <StoriesCard
                id={id}
                stories={stories}
                key={stories.id}
                active={active}
                handleClick={setActive}
              />
            </>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stories;
