import React,{memo} from 'react'

const Count = (Props) => {
    console.log("Count");
    return (
        <>
            <div className='px-5 font-bold'>
                {Props.value}
            </div>
        </>
    )
}

export default memo(Count)
