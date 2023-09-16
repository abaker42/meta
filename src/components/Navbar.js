'use client'
import { motion } from 'framer-motion'
import styles from '../styles'
import { navVariants } from '@/utils/motion'
import search from '../public/akar-icons_search.svg';
import burger from '../public/menu.svg'
import Image from 'next/image'
function Navbar() {
  return (
		<motion.nav
			variants={navVariants}
			initial='hidden'
			whileInView='show'
			className={`${styles.xPaddings} py-8 relative`}
		>
			<div className='absolute w-[50%] inset-0 gradient-01' />
			<div
				className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
			>
				<Image
					src={search}
					alt='search'
					className='w-[24px] h-[24px] object-contain'
				/>
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>METAVERSOS</h2>
        <Image src={burger} alt='menu' className='w-[24px] h-[24px] object-contain'/>
			</div>
		</motion.nav>
	);
}

export default Navbar