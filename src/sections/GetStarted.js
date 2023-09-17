'use client'

import StartSteps from '@/components/StartSteps'
import { TitleText, TypingText } from '@/components/Text'
import { startingFeatures } from '@/constants'
import styles from '@/styles'
import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import getComet from '../../public/get-started.png'
import React from 'react'

function GetStarted() {
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
					variants={planetVariants("left")}
					className={`${styles.flexCenter} flex-1`}
				>
					<Image
						src={getComet}
						alt='get-started'
						height={250}
            width={250}
						className='w-[90%] h-[90%] object-contain'
					/>
				</motion.div>
        <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
        >
          <TypingText title='| How the Metaversos Works' />

          <TitleText title={<>Get started in a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap=[24px]">
            {startingFeatures.map((feature, index)=> (<StartSteps key={feature}
              number={index+1}
              text={feature}
            />))}
          </div>
        </motion.div>
			</motion.div>
		</section>
	);
}

export default GetStarted