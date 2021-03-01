import React, { useState, useEffect } from 'react';
import * as Core from './core';
import songs from './content/songs';
import { IChartLine, IChartMeasure, IMeasureChords, ISongInfo } from './core/models';

import './styles/main.scss';
import { start } from 'repl';

const SelectSong: React.FC<{ songs: Core.Models.ISongInfo[], handleSelect: any }> = props => {
    return <select onChange={(e) => props.handleSelect(e.target.value)}>
        {props.songs.map((song, sx) => {
            return <option value={song.title} label={song.title} key={`song-${sx}`} />
        })}
    </select>
};

const Measure: React.FC<IChartMeasure> = measure => {
    const repeatBarStart = measure.isStart ? <><div className="repeat-bar start"></div><div className="repeat-bar start small"></div></> : null;
    const repeatBarEnd = measure.isEnd ? <><div className="repeat-bar end"></div><div className="repeat-bar end small"></div></> : null;

    return <div className={`chart-line-measure ${measure.isStart ? 'is-start' : ''}`}>
        {repeatBarStart}
        {measure.chords.map((chord: IMeasureChords, cx: number) => {
            return <div key={`chord-${cx}`}>{chord.note}</div>;
        })}
        {repeatBarEnd}
    </div>
}

const Line: React.FC<IChartLine> = line => {
    return <div className={`chart-line`}>
        { line.measures.map((measure: IChartMeasure, mx: number) => <Measure {...measure} key={`meas-${mx}`}/>) }
    </div>
}

const SongDetails: React.FC<ISongInfo> = song => {
    return <div className="song-details">
        <div>{song.title}</div>
        <div>{song.author}</div>
        <div>{song.chart?.lines.map((line: IChartLine, kx: number) => <Line {...line} key={`line-${kx}`} />)}</div>
    </div>
}

const JazzShare: React.FC = props => {
    const [song, setSong] = useState(songs[0] as ISongInfo);

    useEffect(() => {

    }, []);

    const handleSongChange = (name: string) => {
        setSong(songs.filter(s => s.title === name)[0]);
    }

    return <div className="outer-container">
        <h1>Jazz Share</h1>
        <div><button onClick={() => Core.Utils.preEncodeSongData(song)}>Encode</button></div>
        <SelectSong songs={songs} handleSelect={handleSongChange}/>
        <SongDetails {...song}/>
    </div>
}

export default JazzShare;