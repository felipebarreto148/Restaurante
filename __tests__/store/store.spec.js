import { state, getters } from '../../store/index'
import { menu } from '../../__mocks__/menu'

describe('Testing Store', () => {
	describe('Testing initial state', () => {
		it('Testing initial products', () => {
			expect(state().products).toEqual(menu)
		})
	})

	describe('Testing getters', () => {
		let products

		beforeEach(() => {
			products = state().products
		})
		it('get Products', () => {
			expect(getters.products(state())).toEqual(
				products.sort((a, b) => {
					return a.title.toLowerCase() < b.title.toLowerCase()
						? -1
						: a.title.toLowerCase() > b.title.toLowerCase()
						? 1
						: 0
				})
			)
		})

		it('Get last id', () => {
			expect(getters.getLastId(state())).toEqual(4)
		})
	})
})
