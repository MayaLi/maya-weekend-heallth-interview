import yargs from 'yargs'
import { findWords } from './words'

const args = yargs
    .options({
        input: {
            type: 'string',
            demandOption: true,
            alias: 'i',
            description: 'Input string as source of letters to build with',
        },
        dictionary: {
            type: 'string',
            demandOption: true,
            alias: 'd',
            description: 'List of dictionary words separated by comma',
        },
    })
    .parseSync()

const input = args.input
const dictionary = args.dictionary.split(',')

try {
    if (dictionary.length === 0) {
        throw new Error(
            'Please provide a list of dictionary words separated by comma'
        )
    }
    console.log(`-- findWords(${input}, ${dictionary})`)
    const foundWords = findWords(input, dictionary)

    if (foundWords.length === 0) {
        console.log('😅 No words were found.')
    } else {
        console.log(`🎉 We can spell the following words: \n${foundWords}`)
    }
} catch (err) {
    console.error(err)
    process.exit(1)
}
