import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [notif, setNotif] = useState(false);

    function handleSubmit() {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
        setTitle("");
        setDescription("");
        setCategory("");
        setNotif(true);
    }

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        console.log(props);
        return;
    }, []);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {notif && (
                        <div className="alert bg-violet-700 shadow-lg rounded-lg capitalize text-white mb-2 justify-between">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{props.message}</span>
                            </div>
                            <span
                                className="text-sm cursor-pointer font-bold "
                                onClick={() => setNotif(false)}
                            >
                                X
                            </span>
                        </div>
                    )}
                    <div className="bg-white overflow-hidden shadow-sm p-6 sm:rounded-lg">
                        <h3 className="font-semibold text-md text-gray-700 leading-tight mb-3">
                            Tambah Berita
                        </h3>
                        <input
                            type="text"
                            placeholder="Judul"
                            className="input w-full input-bordered m-1"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                        />
                        <textarea
                            className="textarea textarea-bordered resize-none w-full m-1 mb-0"
                            placeholder="Deskripsi"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        ></textarea>
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="input w-full input-bordered m-1"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />
                        <button
                            className="btn btn-primary mt-2"
                            onClick={() => handleSubmit()}
                        >
                            Simpan
                        </button>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm p-6 sm:rounded-lg mt-9">
                        <h3 className="font-semibold text-md text-gray-700 leading-tight mb-3">
                            Berita Saya
                        </h3>
                        <div className="">
                            {props.myNews && props.myNews.length > 0 ? (
                                props.myNews.map((news, i) => {
                                    return (
                                        <div
                                            className="card bg-base-100 shadow-xl mb-3"
                                            key={i}
                                        >
                                            {/* <figure>
                                                <img
                                                    src="https://placeimg.com/400/225/arch"
                                                    alt=""
                                                    className="hidden md:block"
                                                />
                                            </figure> */}
                                            <div className="card-body">
                                                <h2 className="card-title justify-between">
                                                    <span>{news.title}</span>
                                                    <div className="badge bg-violet-700 border-none">
                                                        {news.category}
                                                    </div>
                                                </h2>
                                                <p>{news.description}</p>
                                                <div className="card-actions justify-end">
                                                    <Link
                                                        className="bg-amber-400 p-1 text-white rounded-lg"
                                                        as="button"
                                                        href={route(
                                                            "edit.news"
                                                        )}
                                                        method="get"
                                                        data={{
                                                            id: news.id,
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                        </svg>
                                                    </Link>
                                                    <Link
                                                        className="bg-red-500 p-1 text-white rounded-lg"
                                                        as="button"
                                                        href={route(
                                                            "delete.news"
                                                        )}
                                                        method="post"
                                                        data={{
                                                            id: news.id,
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>Kamu belum membuat berita</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
