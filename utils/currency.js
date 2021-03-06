class Currency {
	/**
	 * From number to real
	 *
	 * @param {number} value The value to real
	 * @returns {string} Parsed to pt-BR currency
	 */
	static toReal(value) {
		return value.toLocaleString(['pt-BR'], {
			minimumFractionDigits: 2,
		})
	}
}

export { Currency }
