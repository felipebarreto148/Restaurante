<template>
	<main class="home">
		<Header title="Cadastrar Item" />
		<Content>
			<section class="registerProduct full">
				<section class="fields">
					<DefaultInput
						name="inpTitle"
						id="inpTitle"
						text="Título"
						placeholder="titulo do produto"
					/>
					<DefaultInput
						name="inpDescription"
						id="inpDescription"
						text="Descrição"
						placeholder="Descrição do produto"
					/>
					<DefaultInput
						name="inpPrice"
						id="inpPrice"
						text="Valor"
						placeholder="Preço do produto"
					/>
				</section>
				<section class="buttons w-full">
					<DefaultButton variant isLink link="/" text="Cancelar" />
					<DefaultButton main isLink link="/register" text="Salvar" />
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

export default {
	name: 'Register',
	components: {
		DefaultInput: () => import('../components/Inputs/DefaultInput.vue'),
		DefaultButton: () => import('../components/Buttons/DefaultButton.vue'),
	},
}
</script>
