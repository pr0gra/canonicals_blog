import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { ArticleStylesType } from 'src/index';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

export type ArticleParamsFormProps = {
	setArtlcleStylesState: (state: ArticleStylesType) => void;
	artlcleStylesState: ArticleStylesType;
};

export const ArticleParamsForm = ({
	setArtlcleStylesState,
	artlcleStylesState,
}: ArticleParamsFormProps) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<>
			<ArrowButton
				setIsSidebarOpen={setIsSidebarOpen}
				isSidebarOpen={isSidebarOpen}
			/>
			<aside
				className={clsx(
					styles.container,
					styles[isSidebarOpen ? 'container_open' : '']
				)}>
				<form className={styles.form}>
					<div className={styles.formContent}>
						<Select
							title='Шрифт'
							selected={artlcleStylesState.fontFamilyOption}
							options={fontFamilyOptions}
							onChange={(fontFamilyOption) =>
								setArtlcleStylesState({
									...artlcleStylesState,
									fontFamilyOption,
								})
							}
						/>
						<RadioGroup
							title='Размер шрифта'
							selected={artlcleStylesState.fontSizeOption}
							name={artlcleStylesState.fontSizeOption.title}
							options={fontSizeOptions}
							onChange={(fontSizeOption) =>
								setArtlcleStylesState({
									...artlcleStylesState,
									fontSizeOption,
								})
							}
						/>
						<Select
							title='Цвет шрифта'
							selected={artlcleStylesState.fontColor}
							options={fontColors}
							onChange={(fontColor) =>
								setArtlcleStylesState({
									...artlcleStylesState,
									fontColor,
								})
							}
						/>
						<Separator />
						<Select
							title='Цвет фона'
							selected={artlcleStylesState.backgroundColor}
							options={backgroundColors}
							onChange={(backgroundColor) =>
								setArtlcleStylesState({
									...artlcleStylesState,
									backgroundColor,
								})
							}
						/>
						<Select
							title='Ширина контента'
							selected={artlcleStylesState.contentWidth}
							options={contentWidthArr}
							onChange={(contentWidth) =>
								setArtlcleStylesState({
									...artlcleStylesState,
									contentWidth,
								})
							}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button
							onClick={() => {
								localStorage.setItem(
									'settings',
									JSON.stringify(defaultArticleState)
								);
								setArtlcleStylesState(defaultArticleState);
							}}
							title='Сбросить'
							type='reset'
						/>
						<Button
							onClick={() => {
								localStorage.setItem(
									'settings',
									JSON.stringify(artlcleStylesState)
								);
								setArtlcleStylesState(artlcleStylesState);
							}}
							title='Применить'
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
