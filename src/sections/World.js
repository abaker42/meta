'use client'

import { TitleText, TypingText } from "@/components/Text"
import styles from "@/styles"
import { fadeIn, staggerContainer } from "@/utils/motion"
import { motion } from "framer-motion"
import Image from "next/image"
import map from '../../public/map.png'
import ppl1 from '../../public/people-01.png'
import ppl2 from '../../public/people-02.png'
import ppl3 from '../../public/people-03.png'

function World() {
  
  return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex  flex-col`}
			>
				<TypingText
					title='| People around the World'
					textStyles='text-center'
				/>
				<TitleText
					title={
						<>
							Track friends across the globe and invite them to play with you in
							your Metaversos!
						</>
					}
					textStyles='text-center'
				/>

				<motion.div
					variants={fadeIn("up", "tween", 0.3, 1)}
					className='relative mt-[68px] flex w-full h-[550px]'
				>
					<Image
						src={map}
						alt='map'
						fill
						className='w-full h-full object-contain'
					/>
					<div className='absolute mb-[36px] bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
						<Image
							src={ppl1}
							alt='person avitar'
							fill
							className='w-full h-full'
						/>
					</div>
					<div className='absolute top-20 mt-[36px] left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
						<Image
							src={ppl2}
							alt='person avitar'
							fill
							className='w-full h-full'
						/>
					</div>
					<div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
						<Image
							src={ppl3}
							alt='person avitar'
							fill
							className='w-full h-full'
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default World