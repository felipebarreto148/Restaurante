import { Currency } from '../../utils/currency'

describe('Testing currency', () => {
	it('Sends number to real currency', () => {
		const floatingValue = 122354.59
		expect(Currency.toReal(floatingValue).match(/[12235459]/g)).toEqual(
			expect.arrayContaining(['1', '2', '2', '3', '5', '4', '5', '9'])
		)
	})

	it('Sends string as number to real', () => {
		const stringValue = '123.341,50'
		expect(Currency.toReal(stringValue).match(/[12334150]/g)).toEqual(
			expect.arrayContaining(['1', '2', '3', '3', '4', '1', '5', '0'])
		)
	})
})

describe('Testing negative values for currency methods', () => {
	it('Sends number to real currency', () => {
		const floatingValue = -122354.59
		expect(Currency.toReal(floatingValue).match(/[-12235459]/g)).toEqual(
			expect.arrayContaining(['-', '1', '2', '2', '3', '5', '4', '5', '9'])
		)
	})

	it('Sends string as number to real', () => {
		const stringValue = '-123.341,50'
		expect(Currency.toReal(stringValue).match(/[-12334150]/g)).toEqual(
			expect.arrayContaining(['-', '1', '2', '3', '3', '4', '1', '5', '0'])
		)
	})
})
