import axios from "axios"
const baseUrl = `https://myiptproject.azurewebsites.net/api/attendance`
export const getQrCode = async (cid) =>{
    return await axios
            .get(`${baseUrl}/qrcode`, {
                params: {
                    cid: cid
                }
            })
            .then(({data}) => {
                return data.qrcode;
            })
}