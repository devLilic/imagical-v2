import React, {useEffect, useState} from 'react';
import PlaylistItem from "@/Components/Playlist/PlaylistItem";
import {IPlaylist} from "@/types/Playlist";
import PlaylistFirstItem from "@/Components/Playlist/PlaylistFirstItem";

const ListOfPlaylists = () => {
    const [playlists, setPlaylists] = useState<IPlaylist[]>([])

    useEffect(() => {
        fetch("/api/v1/playlists", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(result => result.json())
            .then(data => setPlaylists(data.data))
    }, []);

    return (
        <div className=' w-full flex items-stretch'>
            {playlists.length > 0 &&
                (
                    <>
                        <PlaylistFirstItem playlist={playlists[0]}/>
                        <ul className='w-6/12 ml-2'>
                            {playlists.slice(1).map(playlist => <PlaylistItem key={playlist.id} playlist={playlist}/>)}
                        </ul>
                    </>
                )}

            {playlists.length === 0 && <div>No playlists found</div>}
        </div>
    );
};

export default ListOfPlaylists;
