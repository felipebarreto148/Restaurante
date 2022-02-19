<template>
	<main class="home">
		<Header title="Cardápio" />
		<Content>
			<MenuTable />
		</Content>
	</main>
</template>

<script>
// Styles
import '../scss/global.scss'
import '../scss/components/home.scss'

export default {
	name: 'IndexPage',
	components: {
		MenuTable: () => import('../components/Tables/MenuTable.vue'),
	},
}
</script>
