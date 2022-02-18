// Mocks
import menuMock from '../__mocks__/menu'

export const state = () => ({
	products: [...menuMock],
})

export const actions = {
	newProduct({ commit, getters }, payload) {
        payload.id = parseInt(getters.getLastId + 1)
		commit('setProduct', payload)
	},
}

export const getters = {
	products: (state) => {
		return state.products
	},
	getLastId: (state) => {
        const aux = state.products.map((item) => item.id)
        if (aux.length > 0) {
            return aux[aux.length - 1]
        } else {
            return 1;
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
}
