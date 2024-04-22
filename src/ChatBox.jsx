import React from "react";
import { motion } from "framer-motion";

export default function ChatBox({ open }) {
  if (open)
    return (
      <motion.div
        className="bg-[#DFD7CE] h-96 w-64 rounded-xl shadow-lg absolute top-10 right-32 overflow-y-scroll"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-full h-14 bg-[#25D366] rounded-t-xl flex flex-row items-center">
          <div className="bg-white rounded-full h-8 w-8 ml-4 text-center">
            <div className="mt-1">MB</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-[#E0ECBE] mx-4 my-2 rounded-md p-2"
        >
          Goedemorgen!
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 2.5 }}
          className="bg-[#E0ECBE] mx-4 my-2 rounded-md p-2"
        >
          Heb je een update over die nieuwe feature?
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 8.5 }}
          className="bg-[#E0ECBE] mx-4 my-2 rounded-md p-2"
        >
          ?
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 9.5 }}
          className="bg-[#E0ECBE] mx-4 my-2 rounded-md p-2"
        >
          ????
        </motion.div>
      </motion.div>
    );
}
