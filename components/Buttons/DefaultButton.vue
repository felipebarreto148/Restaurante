<template>
	<nuxt-link :hasImg="hasImg" :main="main" :variant="variant" v-if="isLink" :to="link" tag="button">
		<img v-if="hasImg" :src="image" :alt="alt" />
		<span v-else v-html="text" />
	</nuxt-link>
	<button :hasImg="hasImg" :main="main" :variant="variant" v-else @click="$emit('clicked')">
		<img v-if="hasImg" :src="image" :alt="alt" />
		<span v-else v-html="text" />
	</button>
</template>

<script>
// Style 
import '../../scss/components/Buttons/defaultButton.scss'

export default {
	name: 'DefaultButton',
	props: {
		text: {
			type: String,
		},
		isLink: {
			type: Boolean,
		},
		link: {
			type: String,
		},
		hasImg: {
			type: Boolean,
		},
		image: {
			type: String,
		},
		alt: {
			type: String,
		},
        main: {
            type: Boolean
        },
        variant: {
            type: Boolean
        }
	},
}
</script>
