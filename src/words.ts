type LetterMap = { [key: string]: number }

/**
 * Given a bag of letters in a string, find the words we can spell in the dictionary with them.
 *
 * We trim and lower case all inputs such that capitalization is ignored. Future iteration may want to
 * consider words with non-alpha characters.
 *
 * @param bagOfLetters
 * @param dictionary
 * @returns a list of words of the dictionary that can be built with the bagOfLetters
 */
export function findWords(
    bagOfLetters: string,
    dictionary: string[]
): string[] {
    // validate input string
    if (bagOfLetters == null || bagOfLetters.trim().length === 0) {
        throw new Error('Please provide a source string of letters')
    }

    // validate dictionary
    if (
        dictionary == null ||
        dictionary.length === 0 ||
        dictionary.map((w) => w.trim()).length === 0
    ) {
        throw new Error(
            'Please provide a list of dictionary words separated by comma'
        )
    }

    // sanitization of input
    const cleanLetters = bagOfLetters.trim().toLowerCase()
    const cleanDictionary = dictionary.map((w) => w.trim().toLowerCase())

    // build a letter map with a letter as key, number of occurrences as value
    const letterMap: LetterMap = {}
    for (const letter of cleanLetters) {
        if (letterMap[letter] == null) {
            letterMap[letter] = 1
            continue
        }
        letterMap[letter] += 1
    }

    // filter the dictionary for buildable words
    return cleanDictionary.filter((testWord) =>
        // pass a copy of the letterMap instead to make sure it does not get changed by canBuild
        canBuild({ ...letterMap }, testWord)
    )
}

function canBuild(letterMap: LetterMap, testWord: string): boolean {
    for (const testLetter of testWord) {
        // no letter to build with
        if (letterMap[testLetter] == null) {
            return false
        }

        // ran of letters
        if (letterMap[testLetter] === 0) {
            return false
        }

        letterMap[testLetter] -= 1
    }

    return true
}
