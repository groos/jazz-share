import { Models } from ".";
import { IStringLookup } from "./models";

const urlEncodeMap: Models.IStringLookup = {
    'title': 't',
    'author': 'a',
    'chart': 'chrt',
    'chords': 'c',
    'note': 'n',
    'chordType': 'ct',
    'beats': 'b',
    'lines': 'l'
};

/*
    
*/

const handleEncodingLevel = (obj: IStringLookup) => {
    const encoded = Object.keys(obj).reduce((acc: any, currentKey: string) => {
        const shortKey = urlEncodeMap[currentKey] ? urlEncodeMap[currentKey] : currentKey;
        acc[shortKey] = obj[currentKey];
       
        return acc;
    }, {});

    return encoded;
}

const preEncodeSongData = (song: Models.ISongInfo) => {
    let encoded = handleEncodingLevel(song);
    encoded.chrt = handleEncodingLevel(song.chart as IStringLookup);

    console.log('encoded' + ': ' + JSON.stringify(encoded));
    return encoded;
}

export { preEncodeSongData };