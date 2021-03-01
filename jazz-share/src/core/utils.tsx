import { Models } from ".";




const urlEncodeMap: Models.IStringLookup = {
    'title': 't',
    'author': 'a',
    'chart': 'chrt',
    'chords': 'c',
    'note': 'n',
    'chordType': 'ct',
    'beats': 'b'
};

const preEncodeSongData = (song: Models.ISongInfo) => {
    const encoded = Object.keys(song).reduce((acc: any, currentKey: string) => {
        const shortKey = urlEncodeMap[currentKey] ? urlEncodeMap[currentKey] : currentKey;
        acc[shortKey] = song[currentKey];
       
        return acc;
    }, {});

    console.log('encoded' + ': ' + JSON.stringify(encoded));
    return encoded;
}

export { preEncodeSongData };