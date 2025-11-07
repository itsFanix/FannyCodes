// import React from 'react'

import { motion } from "framer-motion";

function Blog() {
  return (
    <div className="w-[75vw] mx-auto py-auto ">
      <div className=" lg:mt-3 flex items-center justify-center h-96 ">
        <motion.div
          animate={{ x: [-90, 0, 90, 0, -90] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className=" p-1 bg-gradient-to-r from-green-300 via-blue-400 to-purple-500   rounded-2xl"
        >
          <h1 className=" font-light text-slate-700  lg:text-xl text-center ">
            Under Construction
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Blog;
