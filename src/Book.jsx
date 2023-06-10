import React from 'react'

const Book = (props) => {

    let {Name, Surname} = props;
    return (
            <div>
                <div>Name: {Name}</div>
                <div>Surname: {Surname}</div>
            </div>
        );
    }
    
    export default Book;
    // <div>
    //     <img src='https://m.media-amazon.com/images/I/51FnFhekNsL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' alt='photo' />
    //     <h2>Shriman Yogi</h2>
    //     <p>Ranjeet Desai</p>
    //     <p>Rs. 598.00</p>
    //     <button>Add to card</button>
    // </div>