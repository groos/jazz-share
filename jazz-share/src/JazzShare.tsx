import React, { useState, useEffect } from 'react';
import * as Core from './core';
import songs from './content/songs';
import { ISongInfo } from './core/models';

import './styles/main.scss';

const SelectSong: React.FC<{ songs: Core.Models.ISongInfo[], handleSelect: any }> = props => {
    return <select onChange={(e) => props.handleSelect(e.target.value)}>
        {props.songs.map((song, sx) => {
            return <option value={song.title} label={song.title} key={`song-${sx}`} />
        })}
    </select>
};

const SongDetails: React.FC<ISongInfo> = song => {
    return <div className="song-details">
        <div>{song.title}</div>
        <div>{song.author}</div>
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