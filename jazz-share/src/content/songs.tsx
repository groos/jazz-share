import { countReset } from 'console';
import { CoreTransformationContext } from 'typescript';
import { Models, Enums } from '../core';

const songs: Models.ISongInfo[] = [
    {
        title: 'Take the A Train',
        author: 'Billy Strayhorn'
    },
    {
        title: 'Killer Joe',
        author: 'Benny Golson',
        chart: {
            lines: [
                {
                    measures: [
                        {
                            chords: [{note: 'C3', chordType: Enums.ChordType.Seven, beats: 4}],
                            beginRepeat: true,
                            isStart: true
                        },
                        {
                            chords: [{note: 'Bb2', chordType: Enums.ChordType.Seven, beats: 4}]
                        },
                        {
                            chords: [{note: 'C3', chordType: Enums.ChordType.Seven, beats: 4}]
                        },
                        {
                            chords: [{note: 'Bb2', chordType: Enums.ChordType.Seven, beats: 4}]
                        }
                    ]
                },
                {
                    measures: [
                        { chords: [{ note: 'C3', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'Bb2', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'C3', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'Bb2', chordType: Enums.ChordType.Seven, beats: 4 }], endRepeat: true }
                    ]
                },
                {
                    measures: [
                        { chords: [{ note: 'E3', chordType: Enums.ChordType.Diminished, beats: 4 }] },
                        { chords: [{ note: 'A3', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'Eb3', chordType: Enums.ChordType.MinorSeventh, beats: 4 }] },
                        { chords: [{ note: 'Eb3', chordType: Enums.ChordType.MinorSeventh, beats: 2 }, { note: 'Ab3', chordType: Enums.ChordType.SevenFlatNine, beats: 2 }] }
                    ]
                },
                {
                    measures: [
                        { chords: [{ note: 'A3', chordType: Enums.ChordType.SevenAddThirteen, beats: 4 }] },
                        { chords: [{ note: 'Eb3', chordType: Enums.ChordType.MinorSeventh, beats: 2 }, { note: 'Ab3', chordType: Enums.ChordType.SevenFlatNine, beats: 2 }] },
                        { chords: [{ note: 'E3', chordType: Enums.ChordType.MinorSeventh, beats: 4 }] },
                        { chords: [{ note: 'A3', chordType: Enums.ChordType.SevenFlatNine, beats: 4 }] }
                    ]
                },
                {
                    measures: [
                        { chords: [{ note: 'C3', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'Bb2', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'C3', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'Bb2', chordType: Enums.ChordType.Seven, beats: 4 }] }
                    ]
                },
                {
                    measures: [
                        { chords: [{ note: 'C3', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'Bb2', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'C3', chordType: Enums.ChordType.Seven, beats: 4 }] },
                        { chords: [{ note: 'Bb2', chordType: Enums.ChordType.Seven, beats: 4 }], isEnd: true }
                    ]
                }
            ]
        }
    },
    {
        title: 'Lady Bird',
        author: 'Tadd Dameron'
    }
]

export default songs;