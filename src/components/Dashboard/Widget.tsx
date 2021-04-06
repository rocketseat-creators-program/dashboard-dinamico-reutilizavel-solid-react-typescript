import React from 'react';
import {templateComponents} from 'src/components/Dashboard/dashboard.config';
import {Widgets} from 'src/components/Dashboard/dashboard.model';

export interface WidgetProps {
	content: Widgets;
	className?: string;
}

export const Widget = ({content, className}: WidgetProps) => {
	const WidgetComponent = templateComponents[content.config.template];
	const customClass = className && `${className} `;
	const position = content.config.position.toLowerCase();

	return (
		<div className={`${customClass}widget widget--${position}`}>
			<WidgetComponent content={content} />
		</div>
	);
};
