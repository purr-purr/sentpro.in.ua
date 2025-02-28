import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import { disclosureInformation } from '@modules/home/components/Reports/data';
import { importDoc } from '@utils/formatters';
import { COMPANY_NAME } from '@utils/const';

const Reports = () => {
	return (
		<SplitBlocks title="Вся необхідна документація" anchor="documentation">
			<Accordion title="Ліцензія">
				<p>
					<strong>{COMPANY_NAME.join(' ')} </strong> надає фінансові послуги на
					підставі{' '}
					<a href={importDoc('1_Vytiag.pdf')} target="_blank" rel="noreferrer">
						ліцензії на діяльність фінансової компанії
					</a>
					.
				</p>
				<br />
				<p>
					Перелік фінансових послуг, які може надавати небанківська фінансова
					установа:
				</p>

				<ul>
					<li>
						<p>надання коштів та банківських металів у кредит.</p>
					</li>
				</ul>
			</Accordion>

			<Accordion title="Розкриття інформації">
				<p>
					<b>Повне найменування юридичної особи</b> <br />
					ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ &quot;СЕНТ ПРО&quot; (ТОВ
					&quot;СЕНТ ПРО&quot;)
				</p>
				<br />
				<p>
					<b>Ідентифікаційний код юридичної особи</b> <br />
					Код ЄДРПОУ 43580771
				</p>
				<br />
				<p>
					<b>Місцезнаходження юридичної особи</b> <br />
					Україна, 03056, місто Київ, вул. Борщагівська, будинок 154 <br />
					<br />
				</p>
				<p>
					{' '}
					<b>Перелік засновників/учасників юридичної особи:</b>
					<br />
					ШАЛУЄВ ДЕНИС ВЯЧЕСЛАВОВИЧ, Країна громадянства: Україна; Розмір внеску до
					статутного фонду: 5 100 000,00 грн; Частка (%): 100,00%
				</p>
				<br />
				<p>
					<b>Відомості про органи управління юридичної особи</b>
					<br />
					ЗАГАЛЬНІ ЗБОРИ УЧАСНИКІВ; ДИРЕКТОР
				</p>
				<br />
				<p>
					{' '}
					<b>Інформація про здійснення зв&#39;язку з юридичною особою</b>
					<br />
				</p>
				<p>
					{' '}
					Телефон 1: +380(91) 481-94-67
					<br />
				</p>{' '}
				<br />
				<p> Адреса електронної пошти: office@sentpro.com.ua</p>
				<br />
				<DocumentsList list={disclosureInformation} />
			</Accordion>

			<Accordion title="Захист прав споживачів">
				<ul>
					<li>Національний банк України: 01601, м. Київ, вулиця Інститутська, 9</li>
					<li>Тел.: 0 800 505 240, email: nbu@bank.gov.ua</li>
					<li>
						Головне управління Держпродспоживслужби в м. Києві: м. Київ, вул.
						Некрасовська, 10/8.;
					</li>
					<li>Тел.: +38 (044) 486-54-86, +38 (063) 639-09-09 («Гаряча лінія»);</li>
					<li>Веб-сайт: kyiv-dpss.gov.ua, Email: info@kyiv-dpss.gov.ua</li>
				</ul>
				<br />
				<p>
					Споживач може подати скаргу до Національного банку України, перейшовши за
					посиланням в розділ «Захист прав споживачів» на сторінці офіційного
					Інтернет- представництва Національного банку України, а саме:{' '}
					<a
						href="https://bank.gov.ua/ua/consumer-protection"
						target="_blank"
						rel="noreferrer"
					>
						https://bank.gov.ua/ua/consumer-protection
					</a>
					.
				</p>{' '}
				<br />
				<p>
					Також, Споживач може звернутись до Національного банку України, перейшовши
					за посиланням в розділ «Звернення громадян» на сторінці офіційного
					Інтернет- представництва Національного банку України, а саме:{' '}
					<a
						href="https://bank.gov.ua/ua/consumer-protection/citizens-appeals"
						target="_blank"
						rel="noreferrer"
					>
						https://bank.gov.ua/ua/consumer-protection/citizens-appeals
					</a>
					.
				</p>
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
