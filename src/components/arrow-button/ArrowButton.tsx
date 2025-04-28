import { useState } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

type ArrowButtonProps = {
	setIsSidebarOpen: (newValue: boolean) => void;
	isSidebarOpen: boolean;
}

export const ArrowButton = ({
	setIsSidebarOpen,
	isSidebarOpen,
}: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}>
			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
		</div>
	);
};
