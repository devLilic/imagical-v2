
export interface IApiPlaylist{
    id: number,
    title: string,
    playDate: string
}

export interface IPlaylist extends IApiPlaylist{
    selected: boolean
}

export interface IDefaultPlaylistState {
    playlists: IPlaylist[]
}

export interface IPlaylistContext extends IDefaultPlaylistState {
    getLatest: () => Promise<void>
    openPlaylist: (id: number) => Promise<void>
    deletePlaylist: (id: number) => Promise<void>
}
