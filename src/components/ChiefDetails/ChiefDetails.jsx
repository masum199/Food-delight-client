import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChiefDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const [chiefs, setChiefs] = useState();
    console.log(id)
    useEffect(() => {
      const chiefData = datas.find((item) => item.id === id);
      setChiefs(chiefData);
    }, [datas, id]);
    console.log(chiefs)
    
    return (
        <div>
            <h2>chiefDetails</h2>
        </div>
    );
};

export default ChiefDetails;