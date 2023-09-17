import styles from '@/styles'
import React from 'react'

function StartSteps(props) {
  const {number, text} = props
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] mb-[4px]`}>
        <p className='font-bold text-[20px] text-white'>{number}</p>
      </div>
      <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]'>{text}</p>
    </div>
  )
}

export default StartSteps