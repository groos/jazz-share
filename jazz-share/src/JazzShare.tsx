import React, { useState, useEffect } from 'react';
import * as Core from './core';
import songs from './content/songs';
import { IChartLine, IChartMeasure, IMeasureChords, ISongInfo } from './core/models';
import './styles/main.scss';

const jsonpack = require('jsonpack');

const SelectSong: React.FC<{ songs: Core.Models.ISongInfo[], handleSelect: any, selected: string }> = props => {
    const active = songs.filter(s => s.title === props.selected);
    return <select onChange={(e) => props.handleSelect(e.target.value)} value={active.length ? active[0].title : songs[0].title}>
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
    const [song, setSong] = useState(songs[1] as ISongInfo);
    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search.substring(1));
        if (params.has('d')) {
            const songData = jsonpack.unpack(params.get('d'));
            setSong(songData);
        }
    }, []);

    const handleSongChange = (name: string) => {
        setSong(songs.filter(s => s.title === name)[0]);
    }

    const createNewShareUrl = () => {
        if (song) {
            const compressed = jsonpack.pack(song);
            setShareUrl(encodeURI(`www.abc.com?d=${JSON.stringify(compressed)}`));
        }
    }

    return <div className="outer-container">
        <h1>Jazz Share</h1>
        <div><button onClick={createNewShareUrl}>Encode</button></div>
        <div>{shareUrl}</div>
        <SelectSong songs={songs} handleSelect={handleSongChange} selected={song.title}/>
        <SongDetails {...song}/>
    </div>
}

export default JazzShare;