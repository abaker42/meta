'use client'

import { fadeIn } from "@/utils/motion"
import { motion } from "framer-motion"
import Image from "next/image"
import arrow from '../../public/arrow.svg'

function InsightCard(props) {
  const {imgUrl, title, subtitle, index} = props
  return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 1)}
			className='flex md:flex-row flex-col gap-4'
		>
			<Image
				src={imgUrl}
				alt={title}
				height={500}
				width={500}
				className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover'
			/>
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
          <p className="mt-[60px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <Image src={arrow} alt="up click"
          height={50} width={50} className="w-[40%] h-[40%] object-contain" />
        </div>
      </div>
		</motion.div>
	);
}

export default InsightCard