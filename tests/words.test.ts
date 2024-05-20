import { describe, it } from 'node:test'
import assert from 'node:assert'
import { findWords } from '../src/words'

describe('findWord unit tests', () => {
    describe('with invalid bagOfLetters', () => {
        it('should throw', () => {
            assert.throws(() => findWords('', []))
        })
    })
    describe('with invalid dictionary', () => {
        it('should throw', () => {
            assert.throws(() => findWords('letters', []))
        })
    })

    describe('with valid input', () => {
        it('should work for singe letter word', () => {
            assert.deepEqual(findWords('smile', ['i']), ['i'])
        })

        it('should exclude not buildable words', () => {
            assert.deepEqual(findWords('smile', ['go', 'big']), [])
        })

        it('should return all possible words', () => {
            assert.deepEqual(findWords('smile', ['mile', 'slim', 'smell']), [
                'mile',
                'slim',
            ])
        })

        it('should use repeating letters', () => {
            assert.deepEqual(
                findWords('oogd', [
                    'tea',
                    'dog',
                    'do',
                    'god',
                    'goo',
                    'good',
                    'dooog',
                ]),
                ['dog', 'do', 'god', 'goo', 'good']
            )
        })

        it('shoule return repeating dictionary words', () => {
            assert.deepEqual(findWords('smile', ['i', 'i', 'o']), ['i', 'i'])
        })

        it('works for capitalized letters', () => {
            assert.deepEqual(findWords('smile', ['MileS']), ['miles'])
        })
    })
})
