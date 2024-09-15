"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative ">
      <motion.div>
        <div className="w-[100px] h-[100px] xl:w-[200px] xl:h-[200px]">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
