'use client'

import { TitleText, TypingText } from "@/components/Text";
import { newFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import getComet from "../../public/whats-new.png";
import React from "react";
import NewFeatures from "@/components/NewFeatures";

function WhatsNew() {
  
  return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
			>
				<motion.div
					variants={fadeIn("right", "tween", 0.2, 1)}
					className='flex-[0.75] flex justify-center flex-col'
				>
					<TypingText title="| What's New?" />

					<TitleText title={<>New findings in the Metaversos</>} />
					<div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
						{newFeatures.map((feature) => (
							<NewFeatures key={feature.title} {...feature} />
						))}
					</div>
				</motion.div>
				<motion.div
					variants={planetVariants("right")}
					className={`${styles.flexCenter} flex-1`}
				>
					<Image
						src={getComet}
						alt='whats new'
						height={250}
						width={250}
						className='w-[90%] h-[90%] object-contain'
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default WhatsNew