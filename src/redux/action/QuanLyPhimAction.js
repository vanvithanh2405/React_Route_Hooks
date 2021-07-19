import axios from "axios";




export const LayDanhSachPhimAction = (maNhom = 'GP01') => {
    return async (dispatch) => {

        try {
            // async await thường dụng trong các nghiệp vụ thực hiện các promise tuần tự
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET'
            });

            await dispatch({
                type: 'SET_DATA_FILM',
                arrPhim: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }

        // dùng trong trường hợp gọi các api không liên quan nhau 
        // let promise = axios({
        //     url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        //     method: 'GET'
        // });
        // // Xử lý thành công
        // promise.then((result) => {
        //     console.log('result', result.data)
        //     // Sau khi lấy dữ liệu từ api trả về => đưa vào state thông qua hàm setState
        //     dispatch({
        //         type: 'SET_DATA_FILM',
        //         arrPhim: result.data.content
        //     })
        // });

        // // Xử lí thất bại
        // promise.catch((errors) => {
        //     console.log('errors', errors.response?.data)
        // })
    }
}

export const layChiTietPhim = (maPhim) => {
    return async (dispatch, getState) => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });

            // sau khi có dữ liệu dispatch lên reducer
            dispatch({
                type: 'SET_CHI_TIET_PHIM',
                chiTietPhim:result.data.content
            })
        } catch (errors) {
            console.log('errors',errors.response?.data)
        }
    }
}