// Gets the array of strings and returns the elements separated by comma
// If only one elements, return
// If only two elements, return with "and"
// If more elements join (1 - (n-1)) elements by comma and last by "and"
export const getCommaSeparatedElems = (elements) => {
    if (!elements.length) return ''
    if (elements.length === 1) return elements[0]

    let result = elements[0]
    for (let n = 1; n < elements.length - 1; n++) {
        result = result + ', ' + elements[n]
    }

    return result + ' and ' + elements[elements.length - 1]
}
