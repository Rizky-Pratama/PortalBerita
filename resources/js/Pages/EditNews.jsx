import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    // const [notif, setNotif] = useState(false);

    console.log("edit ", props);
    console.table(title, description, category);
    function handleSubmit() {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };

        // if (title === null) setTitle(props.myNews.title);
        // if (description === null) setDescription(props.myNews.description);
        // if (category === null) setCategory(props.myNews.category);

        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
        // setNotif(true);
    }
    return (
        <>
            <Head title={props.title} />
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dasboard
                    </h2>
                }
            >
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm p-6 sm:rounded-lg">
                            <h3 className="font-semibold text-md text-gray-700 leading-tight mb-3">
                                Edit Berita
                            </h3>
                            <input
                                type="text"
                                placeholder="Judul"
                                className="input w-full input-bordered m-1"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                defaultValue={props.myNews.title}
                            />
                            <textarea
                                className="textarea textarea-bordered resize-none w-full m-1 mb-0"
                                placeholder="Deskripsi"
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                defaultValue={props.myNews.description}
                            ></textarea>
                            <input
                                type="text"
                                placeholder="Kategori"
                                className="input w-full input-bordered m-1"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                                defaultValue={props.myNews.category}
                            />
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary mt-2 capitalize"
                                    onClick={() => handleSubmit()}
                                >
                                    Simpan
                                </button>
                                <Link
                                    as="button"
                                    className="btn btn-ghost mt-2 ml-0.5 capitalize"
                                    href="/dashboard"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
