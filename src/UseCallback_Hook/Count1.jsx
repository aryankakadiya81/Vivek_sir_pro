import React,{memo} from 'react';

const Count1 = (Props) => {
    console.log("Count_1");
    return (
        <>
            <div className='px-5 font-bold'>
                {Props.value}
            </div>
        </>
    )
}

export default memo(Count1)
