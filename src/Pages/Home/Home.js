import React from 'react'

export default function Home(props) {

    console.log('propsRoute', props)

    return (
        <div className="container">
            Home


            <button onClick={() => {
                // trở về trang trước
                props.history.goBack();
            }}>GO BACK</button>
        </div>
    )
}
