import React from 'react'

const Book = (props) => {
    // ${Img}.jpg

    let { Name, Email, Qualification, Contect, Address, Img} = props;
    return (
        <div className=''>
            <div className=''>
                <div className="card mt-2" style={{ width: "18rem" }}>
                    <img src={Img} className="card-img-top"/>
                    <ul className="list-group list-group-flush- d-flex justify-between">
                        <li className="list-group-item">Name: {Name}</li>
                        <li className="list-group-item">Email: {Email}</li>
                        <li className="list-group-item">Qualification: {Qualification}</li>
                        <li className="list-group-item">Contect: {Contect}</li>
                        <li className="list-group-item">Address: {Address}</li>


                    </ul>
                </div>
            </div>

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