<template>
	<section class="full menuTable">
		<section class="table w-full">
			<table class="w-full" v-if="hasProducts">
				<tr
					class="list-item w-full"
					v-for="(item, index) in products"
					:key="index"
				>
					<section class="d-flex">
						<td class="item item_index">{{ index | formatIndex }}</td>
						<td class="item item_infos">
							<span class="item_title">{{ item.title | capitalize }}</span>
							<span class="item_description">{{ item.description }}</span>
						</td>
					</section>
					<section class="d-flex">
						<td class="item item_price">{{ item.price | formatToReal }}</td>
						<td class="item item_buttons">
							<DefaultButton
								isLink
								:link="`/edit?id=${item.id}`"
								hasImg
								:image="editImage"
								alt="Icone de editar"
							/>
							<DefaultButton
								hasImg
								:image="excludeImage"
								alt="Icone de remover"
								@clicked="() => removeProduct(item.id)"
							/>
						</td>
					</section>
				</tr>
			</table>
			<h2 v-else class="text-subtitle px-8">
				Você ainda não possui items no seu cardápio, clique em novo item para
				começar.
			</h2>
		</section>
		<DefaultButton main isLink link="/register" text="Novo Item" />
	</section>
</template>

<script>
// Styles
import '../../scss/components/Tables/menuTable.scss'
// Utils
import { Currency } from '../../utils/currency'
// Assets
import editImage from '../../assets/pencil.png'
import excludeImage from '../../assets/exclude.png'
// Store
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'MenuTable',
	components: {
		DefaultButton: () => import('../Buttons/DefaultButton.vue'),
	},
	data() {
		return {
			editImage,
			excludeImage,
		}
	},
	computed: {
		...mapGetters(['products']),
		hasProducts() {
			return this.products.length > 0
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
			return Currency.toReal(parseFloat(value))
		},
		capitalize(value) {
			return value.charAt(0).toUpperCase() + value.slice(1);
		}
	},
	methods: {
		...mapActions(['removeProduct']),
	},
}
</script>
