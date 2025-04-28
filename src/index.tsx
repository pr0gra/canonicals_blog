import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useEffect } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export type ArticleStylesType = {
	fontFamilyOption: OptionType;
	fontSizeOption: OptionType;
	fontColor: OptionType;
	contentWidth: OptionType;
	backgroundColor: OptionType;
};

const App = () => {
	const [artlcleStylesState, setArtlcleStylesState] =
		useState<ArticleStylesType>(defaultArticleState);

	useEffect(() => {
		const stylesSettings = localStorage.getItem('settings');
		if (!stylesSettings) return;
		console.log(JSON.parse(stylesSettings))
		setArtlcleStylesState(JSON.parse(stylesSettings));
	}, []);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': artlcleStylesState.fontFamilyOption.value,
					'--font-size': artlcleStylesState.fontSizeOption.value,
					'--font-color': artlcleStylesState.fontColor.value,
					'--container-width': artlcleStylesState.contentWidth.value,
					'--bg-color': artlcleStylesState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				setArtlcleStylesState={setArtlcleStylesState}
				artlcleStylesState={artlcleStylesState}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
