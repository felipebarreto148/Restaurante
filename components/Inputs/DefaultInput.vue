<template>
	<section class="defaultInput">
		<label :for="id">{{ text }} </label>
		<input :type="type" :name="name" :id="id" :placeholder="placeholder"/>
	</section>
</template>

<script>
// Style
import '../../scss/components/Inputs/defaultInput.scss'

export default {
	name: 'DefaultInput',
	props: {
		type: {
			type: String,
			default: () => 'text',
		},
		text: {
			type: String,
			required: true,
			default: () => 'Título',
		},
		name: {
			type: String,
			required: true,
			default: () => 'defaultInput',
		},
		id: {
			type: String,
			required: true,
			default: () => 'defaultInput',
		},
		placeholder: {
			type: String,
			required: true,
			default: () => 'Título do produto',
		},
	},
}
</script>
