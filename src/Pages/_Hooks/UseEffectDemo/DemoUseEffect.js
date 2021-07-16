import React, { useEffect, useState } from 'react'

export default function DemoUseEffect(props) {
    
    let [number,setNumber] = useState(1);
    let [like,setLike] = useState(1);

    // useEffect(()=>{
    //     // hạn chế setState tại đây 
    //     console.log('useeffect thay thế cho componentDidMount và componentDidUpdate')
    // })
    
    useEffect(()=>{
        console.log('useeffect thay thế cho componentDidMount');
        // thường dùng để call api
        return () => {
            // Nội dung khi component này hủy thì sẽ thực thi hàm này   
            // tương tự component willUnmount
            console.log('Xóa rồi nhé !')
        }
    },[])

    useEffect(()=>{
        console.log('useeffct thay thế cho componentDidUpdate');
        // thường dùng để call api
    },[like]) //khi state like thay đổi giá trị bởi hàm setLike => thì useEffect này sẽ chạy lại (so sánh kiểu cơ sở) 

    return (
        <div>
            <div className="container">
                useEffect
                <h3>Number: {number}</h3>
                <h3>Like: {like}</h3>
                <button className="btn btn-success" onClick={()=>{
                    setNumber(number+1);
                }}>+</button>
                <br />
                <button className="btn btn-success" onClick={()=>{
                    setLike(like+1);
                }}>Like</button>
            </div>
        </div>
    )
}
