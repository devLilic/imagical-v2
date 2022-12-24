import {
    DELETE_PLAYLIST,
    GET_LATEST_PLAYLISTS,
    OPEN_PLAYLIST
} from "@/Store/Playlist/playlist-actions";
import {IPlaylist} from "@/types/Playlist";

export interface IGetLatestPlaylistsAction {
    type: typeof GET_LATEST_PLAYLISTS,
    playlists: IPlaylist[]
}

export interface IOpenPlaylistAction {
    type: typeof OPEN_PLAYLIST,
    playlist: IPlaylist
}

export interface IDeletePlaylistAction {
    type: typeof DELETE_PLAYLIST,
    playlist_id: number
}

export type PlaylistActionsType =
    | IGetLatestPlaylistsAction
    | IOpenPlaylistAction
    | IDeletePlaylistAction
