import React, {ReactNode} from 'react';
// @ts-ignore
import {Chart, Layer, Bars, Ticks} from 'rumble-charts';
import {Content} from 'src/components/Dashboard-initial/dashboard.model';

export interface WidgetProps {
	data: Content;
	type: 'COMPARISON' | 'METRIC' | 'FUNNEL';
	position: 'FULL' | 'HALF' | 'QUARTER';
	template: 'LIST' | 'PIE CHART' | 'BAR CHART' | 'BLOCK';
	className?: string;
}

export const Widget = ({data, type, position, template, className}: WidgetProps) => {
	const showContent = (): ReactNode => {
		if (template === 'LIST') {
			return (
				<ul>
					{data.items?.map((item: any) => (
						<li>{`${item.title} - ${item.value}`}</li>
					))}
				</ul>
			);
		}
		if (template === 'BLOCK') {
			return (
				<>
					<p className="widget__value">{data.value}</p>
					<p className="widget__info">{`${data.prev} - ${data.current}`}</p>
				</>
			);
		}
		if (template === 'BAR CHART') {
			return (
				<div className="widget__chart">
					<Chart width={800} height={250} series={data.items} minY={0}>
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
					<p className="widget__info">{data.current}</p>
				</div>
			);
		}
		return <p>Template incompatível</p>;
	};

	return (
		<div className={`${className && className} widget`}>
			<h2 className="widget__title">{data.title}</h2>
			{showContent()}
		</div>
	);
};
