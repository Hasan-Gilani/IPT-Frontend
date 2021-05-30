import QRCode from 'qrcode.react'
import {getQrCode} from "../requests/attendance";
import {useEffect, useState} from "react";
import {RotateLoader} from "react-spinners";

const QrCode = (props) => {

    const {cid} = window.localStorage

    const [qrCode, setQrCode] = useState();
    const [loading, setLoading] = useState(true)
    console.log(props.seed)


    useEffect( () => {
        const fetchQr = async () => {
            getQrCode(cid)
                .then(qrcode => {
                    setQrCode(qrcode)
                    setLoading(false)
                })
        }
        fetchQr()
    }, [props.seed])

    return(
        <div>
            <h1>Class QrCode</h1>
            <br/>
            {loading ? <RotateLoader loading={loading}/>: <QRCode value={qrCode} size={480}/>}
        </div>
    )
}

export default QrCode;