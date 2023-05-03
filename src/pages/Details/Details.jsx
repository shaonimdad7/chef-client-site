import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const [datastate, setDataState] = useState({});
    const { id: idUrl } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        const findingid = data.find((i) => i.id == idUrl);
        setDataState(findingid || {});
    }, [data, idUrl]);

    const { img, name } = datastate;
    // const { id } = useParams();

    return (
        <div>
            <h1> this is detials {name} </h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Details;