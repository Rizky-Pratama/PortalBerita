const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">
                            {data.category}
                        </div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            Di buat oleh {data.author}
                        </div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <p>Data tidak ditemukan</p>;
};

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsList;
