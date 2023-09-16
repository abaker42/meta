'use client'
import {motion} from 'framer-motion'
import { textContainer, textVariant2 } from "@/utils/motion";

export function TypingText({ title, textStyles }) {
	return (
		<motion.p
			variants={textContainer}
			className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
		>
			{Array.from(title).map((char, index) => (
				<motion.span variants={textVariant2} key={index}>
					{char === " " ? "\u00A0" : char}
				</motion.span>
			))}
		</motion.p>
	);
}

export function TitleText({title, textStyles}) {
	return <h2>Title Text</h2>;
}

