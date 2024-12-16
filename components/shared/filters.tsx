import React from 'react'
import { Input } from '../ui/input'
import { CheckBoxFiltersGroup } from './checkbox-filters-group'
import { FilterCheckbox } from './filter-checkbox'
import { RangeSlider } from './range-slide'
import { Title } from './title'

interface Props {
	className?: string
}
export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text="Фильтрация" size='sm' className='mb-5 font-bold' />
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text="Можно собирать" value="1" />
				<FilterCheckbox text="Новинки" value="2" />

				<div className='mt-5 border-y-neutral-100 py-6 pb-7'>
					<p className='font-bold mb-3'>Цена от и до:</p>
					<div className='flex gap-3 mb-5'>
						<Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
						<Input type='number' placeholder='1000' min={0} max={1000} defaultValue={0} />
					</div>
					<RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
				</div>
				<CheckBoxFiltersGroup
				title="Ингридиенты"
				className='mt-5'
				limit={6}
				defaultItems={[
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Сырный соус[2]',
						value: '2',
					},
					{
						text: 'Сырный соус[3]',
						value: '3',
					},
					{
						text: 'Сырный соус[4]',
						value: '4',
					},
					{
						text: 'Сырный соус[5]',
						value: '5',
					},
					{
						text: 'Сырный соус[6]',
						value: '6',
					}
				]}
				items={[
					{
						text: 'Сырный соус',
						value: '1',
					},
					{
						text: 'Моцик',
						value: '2',
					},
					{
						text: 'Сырный соус[3]',
						value: '3',
					},
					{
						text: 'Сырный соус[4]',
						value: '4',
					},
					{
						text: 'Сырный соус[5]',
						value: '5',
					},
					{
						text: 'Сырный соус[5]',
						value: '5',
					},
					{
						text: 'Сырный соус[6]',
						value: '6',
					},
				]}
				/>
			</div>
		</div>
	)
}
