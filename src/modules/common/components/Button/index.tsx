import {
	ButtonHTMLAttributes,
	createElement,
	FC,
	HTMLProps,
	InputHTMLAttributes,
} from 'react';

import s from './Button.module.scss';
import cn from 'classnames';

const Button: FC<{
	text: string;
	type?: 'primary' | 'white' | 'light' | 'text';
	size?: 'small' | 'regular';
	elementType?: 'input' | 'button';
	className?: string;
	onClick?: () => void;
	isDisabled?: boolean;
}> = ({
	isDisabled = false,
	onClick,
	text,
	type = 'primary',
	size = 'regular',
	className,
	elementType = 'button',
}) => {
	const commonProps = {
		disabled: isDisabled,
		onClick,
		className: cn(s.container, s[type], s[size], className && className),
	};

	if (elementType === 'input') {
		return createElement('input', {
			...commonProps,
			name: 'file',
			type: 'file',
		});
	}

	return createElement('button', { ...commonProps }, text);
};

export default Button;
