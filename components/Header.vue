<template>
	<header class="w-full-screen h-12">
		<h1 class="text-h1-header" v-text="title"></h1>
	</header>
</template>

<script>
// Styles
import '../scss/components/header.scss'

export default {
	name: 'Header',
	props: {
		title: {
			type: String,
			default: () => 'Cardápio',
			required: true,
		},
	},
}
</script>
