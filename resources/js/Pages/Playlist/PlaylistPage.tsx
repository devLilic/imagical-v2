import React from 'react';
import PageContent from "@/Shared/PageContent";

interface IPlaylistPage{
    auth: {
        user: IUser,
    },
    errors: object,
    // playlist: iPl
}

const PlaylistPage = ({auth, errors, playlist}: IPlaylistPage) => {
    return (
        <PageContent auth={auth} errors={errors}>
            asdas
        </PageContent>
    );
};

export default PlaylistPage;
