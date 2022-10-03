import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
export default function Home(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <main className="flex justify-center items-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-5">
                <NewsList news={props.news.data} />
            </main>
            <div className="flex justify-center items-center my-5">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
