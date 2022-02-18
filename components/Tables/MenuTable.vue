<template>
	<section class="full menuTable">
		<section class="table w-full">
			<table class="w-full">
				<tr class="list-item w-full" v-for="(item, index) in menu" :key="index">
					<section class="d-flex">
						<td class="item item_index">{{ index | formatIndex }}</td>
						<td class="item item_infos">
							<span class="item_title">{{ item.title }}</span>
							<span class="item_description">{{ item.description }}</span>
						</td>
					</section>
					<section class="d-flex">
						<td class="item item_price">{{ item.price | formatToReal }}</td>
						<td class="item item_buttons">
							<DefaultButton
								isLink
								link="/edit"
								hasImg
								:image="editImage"
								alt="Icone de editar"
							/>
							<DefaultButton
								hasImg
								:image="excludeImage"
								alt="Icone de remover"
							/>
						</td>
					</section>
				</tr>
			</table>
		</section>
		<DefaultButton main isLink link="/register" text="Novo Item" />
	</section>
</template>

<script>
// Styles
import '../../scss/components/Tables/menuTable.scss'
// Mocks
import menuMock from '../../__mocks__/menu'
// Utils
import { Currency } from '../../utils/currency'
// Components
import DefaultButton from '../Buttons/DefaultButton.vue'
// Assets
import editImage from '../../assets/pencil.png'
import excludeImage from '../../assets/exclude.png'
export default {
	name: 'MenuTable',
	components: {
		DefaultButton,
	},
	data() {
		return {
			menuMock,
			editImage,
			excludeImage,
		}
	},
	computed: {
		menu() {
			return menuMock
		},
	},
	filters: {
		formatIndex(value) {
			const index = value + 1
			if (index > 9) {
				return index
			} else {
				return `0${index}`
			}
		},
		formatToReal(value) {
			return Currency.toReal(value)
		},
	},
}
</script>
