import React from 'react'
import { Carousel } from 'antd';
export default function HomeCarousel(props) {

    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }

    return (
        <div>
            <Carousel afterChange={onChange}>
                <div>
                    <h3 style={contentStyle}>
                        <img className="w-100" src="https://picsum.photos/id/77/1000/300" alt="..." />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img className="w-100" src="https://picsum.photos/id/78/1000/300" alt="..." />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img className="w-100" src="https://picsum.photos/id/79/1000/300" alt="..." />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img className="w-100" src="https://picsum.photos/id/80/1000/300" alt="..." />
                    </h3>
                </div>
            </Carousel>,
        </div>
    )
}

