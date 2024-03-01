import React, { useEffect, useState } from "react";
import data from "../../shared/data";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};

function GameList({ setPosts, filteredPosts }) {
  const [games, setGames] = useState();

  useEffect(() => {
    setGames(data);
    //console.log(games);
  }, []);

  //Filter type - basketball, swimming, tennis, etc...
  const filterType = (category) => {
    console.log(category === "All");
    category === "All"
      ? setPosts(filteredPosts)
      : setPosts(
          filteredPosts.filter((item) => {
            return item.activity === category;
          })
        );
  };

  return (
    <div className="flex justify-center px-6 mb-12">
      <ul className="max-w-[38rem]  flex flex-wrap justify-center gap-6">
        {games?.GameList.map((item) => (
          <motion.li
            key={item.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={item.id}
          >
            <button
              className="flex flex-col items-center cursor-pointer hover:scale-105"
              onClick={() => {
                filterType(item.name);
              }}
            >
              <Image
                src={item.image}
                alt="game image"
                width={45}
                height={45}
                quality={100}
              />
              <h3 className="text-sm text-gray-900 text-center font-semibold">
                {item.name}
              </h3>
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
