<template>
	<section class="defaultInput">
		<label :for="id">{{ text }} </label>
		<input
			:id="id"
			:type="type"
			:name="name"
			:placeholder="placeholder"
			:disabled="disabled"
			autocomplete="off"
			v-model="valueData"
		/>
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
			default: () => 'Título do produto',
		},
		disabled: {
			type: Boolean,
			default: () => false,
		},
		value: {
			type: [String, Number],
			default: () => '',
		},
	},
	computed: {
		valueData: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit('inputed', value)
			},
		},
	},
}
</script>
