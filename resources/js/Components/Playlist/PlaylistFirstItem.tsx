import React from 'react';
import {IPlaylist} from "@/types/Playlist";
import {Button, Progress} from "@material-tailwind/react";

interface IPlaylistFirstItem {
    playlist: IPlaylist
}

const PlaylistFirstItem = ({playlist}: IPlaylistFirstItem) => {
    return (
        <div className='px-3 py-3 w-6/12 bg-blue-50 text-blue-600 border border-green-700 rounded-lg flex flex-col justify-around items-center my-2 mx-auto'>
            <div className={'font-bold'}>
                <span>{playlist.title} </span>
                <span>{playlist.playDate} </span>
            </div>

            <div className="mx-4 p-1 w-8/12 flex">
                <Progress value={80}
                          color={'green'}
                          variant={'gradient'}
                          className={'rounded h-4 border border-green-800'}/>
            </div>

            <div className='flex items-center w-full justify-around'>
                <a className='px-2 py-0 rounded hover:underline'
                   href="#">Deschide</a>
                <Button className={"px-2 mx-2"}
                        color={'red'}
                        size={'sm'}
                        ripple={false}
                        variant={'outlined'}
                >Download</Button>
            </div>
        </div>
    );
};

export default PlaylistFirstItem;
