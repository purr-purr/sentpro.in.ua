import { importDoc } from '@utils/formatters';
import { type IDocumentsList } from '@utils/types';
import { COMPANY_NAME } from '@utils/const';
export const disclosureInformation: IDocumentsList[] = [
	{
		title: 'Свідоцтво фінансової установи',
		link: importDoc('2_Svidotstvo.pdf'),
	},
	{
		title: 'Правила надання споживчих кредитів',
		link: importDoc('3_Pravyla.pdf'),
	},
	{
		title: 'Порядок розгляду звернень споживічів',
		link: importDoc('4_Poriadok_rozgliad_spozh.pdf'),
	},
	{
		title: 'Порядок взаємодії із споживачами',
		link: importDoc('5_Poriadok_vzaemodii_spozh.pdf'),
	},
	{
		title: 'Договір споживчого кредиту',
		link: importDoc('6_Dogovir spozhivchogo creditu.pdf'),
	},
	{
		title: 'Паспорт споживчого кредиту',
		link: importDoc('7_Pasport kredytu.pdf'),
	},
	{
		title: `Структура власності ${COMPANY_NAME.join(' ')}`,
		link: importDoc('8_Struktura.pdf'),
	},
];
