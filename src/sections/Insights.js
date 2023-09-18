'use client'
import InsightCard from '@/components/InsightCard'
import { TitleText, TypingText } from '@/components/Text'
import { insights } from '@/constants'
import styles from '@/styles'
import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'

function Insights() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| Insight' textStyles='text-center' />
        <TitleText title='Insights about Metaversos' textStyles='text-center' />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index)=>(
            <InsightCard key={index}
            {...insight}
            index={index +1}/>
          ))}
        </div>
        </motion.div>      
    </section>
  )
}

export default Insights