import React from 'react';
import {IPlaylist} from "@/types/Playlist";
import {Button, Progress} from "@material-tailwind/react";

interface IPlaylistItem {
    playlist: IPlaylist
}

const PlaylistItem = ({playlist}: IPlaylistItem) => {
    return (
        <li className='text-sm px-3 py-1 bg-transparent border border-green-700 rounded-lg flex justify-between items-center my-2'>
            <div>
                <span>{playlist.playDate}</span>
                <div className='w-full'>{playlist.title} </div>
            </div>

            <div className="mx-4 p-1 w-6/12 flex">
                <Progress value={80}
                          color={'green'}
                          variant={'gradient'}
                          className={'rounded h-4 border border-green-800'}/>
            </div>

            <div className='flex items-center'>
                <a className='border border-blue-600 px-2 py-0 rounded hover:bg-blue-400 hover:text-white'
                   href="#">Deschide</a>
            </div>
        </li>
    );
};

export default PlaylistItem;
