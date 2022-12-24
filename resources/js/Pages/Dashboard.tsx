import React, {ChangeEvent, useEffect, useState} from "react";
import PageContent from "@/Shared/PageContent";
import UploadButton from "@/Components/UI/UploadButton/UploadButton";
import {useForm} from "@inertiajs/inertia-react";
import ListOfPlaylists from "@/Components/Playlist/ListOfPlaylists";
import {Card} from "@material-tailwind/react";

interface IDashboardProps {
    auth: {
        user: IUser
    },
    errors: object
}

interface IFile {
    name: string
    type: string
}

interface IFormData{
    file: IFile | null
}

export default function Dashboard({auth, errors}: IDashboardProps) {
    const [isFileTypeOK, setIsFileTypeOK] = useState(false);
    const {data, setData, post} = useForm<IFormData>({
        file: null,
    });

    useEffect(() => {
        if (isFileTypeOK) {
            post('titles');
        }
    }, [isFileTypeOK])

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files)
        if (e.target.files) {
            // check if uploaded file is of type HTML
            const typeOK = e.target.files[0].type === 'text/html'
            setData("file", e.target.files[0]);
            setIsFileTypeOK(typeOK)
        }
    }

    return (
        <PageContent auth={auth} errors={errors}>
            <div className="grid grid-cols-2 gap-3">
                <Card className={"flex justify-center items-center"}>
                    <form>
                        <div className="flex flex-col w-full items-center justify-center bg-grey-lighter">
                            <UploadButton title="Upload"
                                          handleChange={handleChange}
                                          classes='text-blue-700 bg-transparent hover:bg-blue-50 border-blue-600 '/>
                            <div>
                                {!isFileTypeOK && <div className='mt-5'>Fișierul trebuie să fie de tip HTML</div>}
                            </div>
                        </div>
                    </form>
                </Card>

                <Card className={"px-2 py-3"}>
                    <ListOfPlaylists/>
                </Card>

                <Card className={"px-2 py-3 col-span-2"}>
                    Imagini
                </Card>
            </div>


        </PageContent>
    );
}
