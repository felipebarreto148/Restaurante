// Mocks
import { menu } from '../__mocks__/menu'

export const state = () => ({
	products: [...menu],
})

export const actions = {
	newProduct({ commit, getters }, payload) {
		payload.id = parseInt(getters.getLastId + 1)
		commit('setProduct', payload)
	},
	removeProduct({ commit }, id) {
		commit('removeProduct', id)
	},
	editProduct({ commit }, payload) {
		commit('editProduct', payload)
	},
	getProductById: ({ state }, id) => {
		const index = state.products.map((item) => item.id).indexOf(parseInt(id))
		return state.products[index]
	},
}

export const getters = {
	products: (state) => {
		const producs = [...state.products]
		return producs.sort((a, b) => {
			return a.title.toLowerCase() < b.title.toLowerCase()
				? -1
				: a.title.toLowerCase() > b.title.toLowerCase()
				? 1
				: 0
		})
	},
	getLastId: (state) => {
		const aux = state.products.map((item) => item.id)
		if (aux.length > 0) {
			return aux[aux.length - 1]
		} else {
			return 1
		}
	},
}

export const mutations = {
	setProduct(state, payload) {
		state.products.push(payload)
	},
	removeProduct(state, id) {
		const index = state.products.map((item) => item.id).indexOf(id)
		state.products.splice(index, 1)
	},
	editProduct(state, payload) {
		const index = state.products.map((item) => item.id).indexOf(payload.id)
		state.products.splice(index, 1, payload)
	},
}
