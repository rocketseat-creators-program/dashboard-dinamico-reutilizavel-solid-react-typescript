import React from 'react';
import {WidgetComponentProps} from 'src/components/Dashboard/dashboard.model';

export const ListTemplate = ({content}: WidgetComponentProps) => {
	const title = content.data.title;
	const itemsList = content.data.items!;

	return (
		<div className="widget__list">
			<h2 className="widget__title">{title}</h2>
			<ul className="widget__ul">
				{itemsList.map((item: any) => (
					<li className="widget__li">
						<span>{item.title}</span>
						<span>{item.value}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
