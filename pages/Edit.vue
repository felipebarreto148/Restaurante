<template>
	<main class="home">
		<Header title="Editar Item" />
		<Content>
			<section class="editProduct full">
				<section class="fields">
					<DefaultInput
						:value="product.id"
						name="inpId"
						id="inpId"
						text="ID"
						disabled
					/>
					<DefaultInput
						:value="product.title"
						@inputed="(value) => (product.title = value)"
						name="inpTitle"
						id="inpTitle"
						text="Título"
						placeholder="titulo do produto"
					/>
					<DefaultInput
						:value="product.description"
						@inputed="(value) => (product.description = value)"
						name="inpDescription"
						id="inpDescription"
						text="Descrição"
						placeholder="Descrição do produto"
					/>
					<DefaultInput
						:value="product.price"
						@inputed="(value) => (product.price = value)"
						type="number"
						name="inpPrice"
						id="inpPrice"
						text="Valor"
						placeholder="Preço do produto"
					/>
				</section>
				<section class="buttons w-full">
					<DefaultButton variant isLink link="/" text="Cancelar" />
					<DefaultButton main text="Salvar" @clicked="() => edit()" />
				</section>
			</section>
		</Content>
	</main>
</template>

<script>
// Styles
import '../scss/global.scss'
import '../scss/components/home.scss'
import '../scss/components/editPage.scss'
// Store
import { mapActions } from 'vuex'

export default {
	name: 'Edit',
	components: {
		DefaultInput: () => import('../components/Inputs/DefaultInput.vue'),
		DefaultButton: () => import('../components/Buttons/DefaultButton.vue'),
	},
	data() {
		return {
			product: {
				id: 0,
				title: '',
				description: '',
				price: 0,
			},
		}
	},
	methods: {
		...mapActions(['getProductById', 'editProduct']),
		async edit() {
			await this.editProduct(this.product).then(() => {
				this.$router.push('/')
			})
		},
	},
	async created() {
		await this.getProductById(this.$route.query.id).then((res) => {
			this.product = { ...res }
		})
	},
}
</script>
