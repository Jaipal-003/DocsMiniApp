import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";


function Card({ data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 text-white w-60 h-72 px-8 py-10 rounded-[35px] bg-zinc-900/90 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full   left-0">
          <div className="flex items-center justify-between py-3 px-8 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-sky-200 py-3 rounded-full flex items-center justify-center">
              {data.close ? (
                <RiCloseLine />
              ) : (
                <FiDownload size=".7em" color="#000" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div className= {`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-500"} flex items-center justify-center`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div> 
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
