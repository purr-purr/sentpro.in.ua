import s from './Intro.module.scss';
import Button from '@modules/common/components/Button';
import { COMPANY_NAME } from '@utils/const';

const Intro = () => {
	const scrollToElement = () => {
		const targetElement = document.getElementById('calc');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className={s.container}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>Фінанси, що працюють на вас.</h1>
				<p className={s.infoDesc}>
					{COMPANY_NAME.join(' ')} ваш фінансовий партнер у досягненні успіху.
					Пропонуємо надійні, інноваційні та ефективні рішення для покращення вашого
					фінансового стану.
				</p>

				<div className={s.buttonsGroup}>
					<Button text="Розрахувати кредит" type="white" onClick={scrollToElement} />
				</div>
			</article>
		</section>
	);
};

export default Intro;
