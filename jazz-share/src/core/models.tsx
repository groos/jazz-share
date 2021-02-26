import * as Enums from './enums';

export interface ISongInfo {
    title: string;
    timeSignature?: string;
    author?: string;
    source?: string;
    backingTrackUrl?: string;
    chart?: IChart;
};

export interface IMeasureChords {
    note: string;
    chordType: Enums.ChordType
    beats: number;
}

export interface IChartMeasure {
    isStart?: boolean;
    isEnd?: boolean
    beginRepeat?: boolean;
    endRepeat?: boolean;
    chords: IMeasureChords[];
}

export interface IChartLine {
    measures: IChartMeasure[];
}
export interface IChart {
    lines: IChartLine[];
}