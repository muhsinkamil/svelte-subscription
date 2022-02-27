export const buildOptionGroup = (options) => {
    return options.reduce((acc, { name }) => ({ ...acc, [name]: false }), {})
}
