<template>
	<main class="home">
		<Header title="Cadastrar Item" />
		<Content>
			<section class="registerProduct full">
				<section class="fields">
					<DefaultInput
						@inputed="(value) => (product.title = value)"
						name="inpTitle"
						id="inpTitle"
						text="Título"
						placeholder="titulo do produto"
					/>
					<DefaultInput
						@inputed="(value) => (product.description = value)"
						name="inpDescription"
						id="inpDescription"
						text="Descrição"
						placeholder="Descrição do produto"
					/>
					<DefaultInput
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
					<DefaultButton main text="Salvar" @clicked="() => register()" />
				</section>
			</section>
		</Content>
	</main>
</template>

<script>
// Styles
import '../scss/global.scss'
import '../scss/components/home.scss'
import '../scss/components/registerPage.scss'
// Store
import { mapActions } from 'vuex'
export default {
	name: 'Register',
	components: {
		DefaultInput: () => import('../components/Inputs/DefaultInput.vue'),
		DefaultButton: () => import('../components/Buttons/DefaultButton.vue'),
	},
	data() {
		return {
			product: {
				title: '',
				description: '',
				price: 0,
			},
		}
	},
	methods: {
		...mapActions(['newProduct']),
		async register() {
			await this.newProduct(this.product).then(() => {
				this.$router.push('/')
			})
		},
	},
}
</script>
