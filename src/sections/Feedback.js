"use client";
import styles from "@/styles";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import plant from "../../public/planet-09.png";
import stamp from "../../public/stamp.png";

function Feedback() {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
			>
				<motion.div
					variants={fadeIn("right", "tween", 0.2, 1)}
					className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
				>
					<div className='feedback-gradient' />
					<div className=''>
						<h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white'>
							Anthony
						</h4>
						<p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>
							Founder | Metaversos
						</p>
					</div>
					<p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white'>
						"With the advancement of today's technology, Metaversos is very
						useful for today's work. It can be call web 3.0, by using Metaversos
						you can be literally anything anywhere!"
					</p>
				</motion.div>
				<motion.div
					variants={fadeIn("left", "tween", 0.2, 1)}
					className='relative flex-1 flex justify-center items-center'
				>
					<Image
						src={plant}
						alt='meta planet'
						fill
						className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
					/>

					<motion.div
						variants={zoomIn(0.4, 1)}
						className='lg:block hidden absolute -left-[10%] top-[3%]'
					>
						<Image
							src={stamp}
							alt='stamp'
							className='w-[155px] h-[155px] object-contain'
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default Feedback;
