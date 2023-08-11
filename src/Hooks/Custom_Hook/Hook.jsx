import React, { useState, useEffect } from 'react'

const Hook = (Url) => {

    let [Data,setData] = useState();

    useEffect(() => {
        fetch(Url)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [Url]);

    return ([Data])
}

export default Hook
