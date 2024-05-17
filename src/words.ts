export function findWords(
    bagOfLetters: string,
    dictionary: string[]
): string[] {
    // validate input string
    if (bagOfLetters == null) {
        throw new Error('Please provide a source string of letters')
    }

    // validate dictionary
    if (dictionary.length === 0) {
        throw new Error(
            'Please provide a list of dictionary words separated by comma'
        )
    }

    return []
}
