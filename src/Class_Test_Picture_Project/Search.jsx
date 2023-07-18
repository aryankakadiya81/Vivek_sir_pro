import React, { useEffect, useState } from 'react'

const Search = () => {

    

    // useEffect(() => {
    //     setName2();
    // })

    let Mount = [
        {
            photo: "https://wallpapercave.com/wp/8Ww0M0U.jpg",
            type: "Mountain"
        },
        {
            photo: "http://thewowstyle.com/wp-content/uploads/2015/02/beautiful-mountain.jpg",
            type: "Mountain"
        },
        {
            photo: "https://wallpapercave.com/wp/Eee0Izp.jpg",
            type: "Mountain"
        },
        {
            photo: "https://tse3.explicit.bing.net/th?id=OIP.r3bfr9ZU3zmV-sHnHeTFXAHaFj&pid=Api&P=0&h=180",
            type: "Mountain"
        },
        {
            photo: "http://hdqwalls.com/download/1/colorful-parrot-bird.jpg",
            type: "Bird"

        },
        {
            photo: "https://tse2.mm.bing.net/th?id=OIP.g8MDaeRDWqn34Onc13qu4AHaE9&pid=Api&P=0&h=180",
            type: "Bird"
        },
        {
            photo: "https://tse2.mm.bing.net/th?id=OIP.B5qmX1uvhFUm_v-ya5JFrQHaE8&pid=Api&P=0&h=180",
            type: "Bird"
        },
        {
            photo: "https://tse4.mm.bing.net/th?id=OIP.r7f-1RfXA1EYUb3UjgM1bwHaE7&pid=Api&P=0&h=180",
            type: "Food"
        },
        {
            photo: "https://tse4.mm.bing.net/th?id=OIP.EvrMNlCLqfeqDJA68GdiCQHaE8&pid=Api&P=0&h=180",
            type: "Food"
        },
        {
            photo: "https://tse2.mm.bing.net/th?id=OIP.beEc9A_thEy6LYrIEQLk6AHaFj&pid=Api&P=0&h=180",
            type: "Food"
        },
        {
            photo: "https://media.cntraveler.com/photos/5698051378d099fc122487e3/master/pass/Sunset-Beach-Oahu-cr-getty.jpg",
            type: "Beatch"
        },
        {
            photo: "https://tse1.mm.bing.net/th?id=OIP.r_J2t-juNLkRZ2O289KBOwHaFj&pid=Api&P=0&h=180",
            type: "Beatch"

        },
        {
            photo: "https://tse3.explicit.bing.net/th?id=OIP.FAkSdBAT7c7DJR7knkcWQAHaE8&pid=Api&P=0&h=180",
            type: "Beatch"

        }

    ]
    let [Name, setName] = useState("");
    function Fname(e) {
        setName(e.target.value)
    }
    let [Name2, setName2] = useState("")


    return (
        <div>
            <input type='text' placeholder='Search' className='border-2 p-2 m-10' value={Name} onChange={Fname}></input>
            <button onClick={() => {setName2(Name)}}>Click</button>
            <div className='flex flex-wrap'>
                {
                    Mount.filter((el) => {return(el.type === Name2)}).map((el) => {
                        return (
                            <img src={el.photo} height={"200px"} width={"200px"} className='m-5 hover:scale-110'></img>
                        )
                    }) 
                }
                {
                   Name === "" && Name2 === "" && Mount.map((el) => {
                        return (
                            <img src={el.photo} height={"200px"} width={"200px"} className='m-5 hover:scale-110'></img>
                        )
                    })
                }
            </div>
            

        </div>
    )
}

export default Search
