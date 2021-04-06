import React from 'react';
import {WidgetComponentProps} from 'src/components/Dashboard/dashboard.model';
// @ts-ignore
import {Chart, Layer, Bars, Ticks} from 'rumble-charts';

export const BarChartTemplate = ({content}: WidgetComponentProps) => {
	const title = content.data.title;
	const items = content.data.items;
	const currentParam = content.data.current;

	return (
		<div className="widget__chart">
			<h2 className="widget__title">{title}</h2>
			<Chart width={600} height={250} series={items} minY={0}>
				<Layer width="80%" height="90%" position="bottom center">
					<Ticks
						axis="y"
						lineLength="100%"
						lineStyle={{stroke: '#D1F2EB'}}
						labelStyle={{textAnchor: 'end', dominantBaseline: 'middle', fill: '#D1F2EB'}}
						labelAttributes={{x: -5, y: -6}}
						labelFormat={(label: number) => label}
					/>
					<Bars innerPadding="5%" colors={['#148F77']} />
				</Layer>
			</Chart>
			<p className="widget__info">{currentParam}</p>
		</div>
	);
};
