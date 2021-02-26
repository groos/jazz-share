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
    // css is jacked up for this
    // const startBorder = measure.isStart ? <div className="repeat-bar-container start">
    //     <div className="repeat-bar"></div><div className="repeat-bar little"></div>
    //     <div className="repeat-dot top"></div><div className="repeat-dot bottom"></div>
    // </div> : '';

    return <div className={`chart-line-measure ${measure.isStart ? 'is-start' : ''}`}>
        {/* {startBorder} */}
        {measure.chords.map((chord: IMeasureChords) => {
            return chord.note;
        })}
    </div>
}

const Line: React.FC<IChartLine> = line => {
    return <div className={`chart-line`}>
        { line.measures.map((measure: IChartMeasure) => <Measure {...measure}/>) }
    </div>
}

const SongDetails: React.FC<ISongInfo> = song => {
    return <div className="song-details">
        <div>{song.title}</div>
        <div>{song.author}</div>
        <div>{song.chart?.lines.map((line: IChartLine) => <Line {...line}/>)}</div>
    </div>
}

const JazzShare: React.FC = props => {
    const [song, setSong] = useState(songs[0] as ISongInfo);

    const handleSongChange = (name: string) => {
        setSong(songs.filter(s => s.title === name)[0]);
    }

    return <div className="outer-container">
        <h1>Jazz Share</h1>
        <SelectSong songs={songs} handleSelect={handleSongChange}/>
        <SongDetails {...song}/>
    </div>
}

export default JazzShare;