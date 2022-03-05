export const buildOptionGroup = (options) => {
    return options.reduce((acc, { name }) => ({ ...acc, [name]: false }), {})
}

export const getSelectedValues = (selectedOptions) => {
    const selectedOptionList = []
    Object.keys(selectedOptions).map((sub) => {
        if (selectedOptions[sub]) selectedOptionList.push(sub)
    })
    return selectedOptionList
}
