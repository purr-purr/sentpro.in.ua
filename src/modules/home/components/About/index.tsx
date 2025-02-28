import SplitBlocks from '@modules/common/components/SplitBlocks';
import s from './About.module.scss';
import { COMPANY_NAME } from '@utils/const';

const About = () => {
	return (
		<SplitBlocks
			title="Швидкі кредити на вашу карту"
			anchor="about"
			className={s.container}
		>
			<p>
				{COMPANY_NAME.join(' ')} - сервіс онлайн-кредитів в Україні, в якому можна
				швидко отримати гроші на карту будь-якого українського банку. Діюча ліцензія
				на діяльність фінансової компанії із надання коштів та банківських металів в
				кредит
			</p>
			<p>
				Свідоцтво про реєстрацію фінансової установи серії ФК №В0000145 від
				27.01.2021.
			</p>
		</SplitBlocks>
	);
};

export default About;
