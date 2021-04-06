import React from 'react';
import {WidgetComponentProps} from 'src/components/Dashboard/dashboard.model';

export const BlockTemplate = ({content}: WidgetComponentProps) => {
	const prev = content.data.prev;
	const currentParam = content.data.current;
	const title = content.data.title;
	const value = content.data.value;

	const handleInfo = () => (prev ? `${prev} - ${currentParam}` : currentParam);

	return (
		<div className="widget__block">
			<h2 className="widget__title">{title}</h2>
			<p className="widget__value">{value}</p>
			<p className="widget__info">{handleInfo()}</p>
		</div>
	);
};
