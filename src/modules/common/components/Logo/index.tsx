import { FC } from 'react';
import Link from 'next/link';

import s from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href="/" className={s.container}>
			СЕНТ <br /> ПРО
		</Link>
	);
};

export default Logo;
