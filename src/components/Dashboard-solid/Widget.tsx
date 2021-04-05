import React from 'react';
import {Content} from 'src/components/Dashboard-initial/dashboard.model';

export interface WidgetProps {
	data: Content;
	type: 'COMPARISON' | 'METRIC' | 'FUNNEL';
	position: 'FULL' | 'HALF' | 'QUARTER';
	template: 'LIST' | 'PIE CHART' | 'BAR CHART' | 'BLOCK';
	className: string;
}

export const Widget = (props: WidgetProps) => {
	return (
		<div
			className={`${
				props.className && props.className
			} widget widget--${props.position.toLowerCase()}`}>
			<h2 className="widget__title">{props.data.title}</h2>
			<p className="widget__value">{props.data.value}</p>
			<p className="widget__info">{`${props.data.prev} - ${props.data.current}`}</p>
		</div>
	);
};
