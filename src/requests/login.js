import axios from "axios";
const baseUrl = `https://myiptproject.azurewebsites.net/api/login`
export const LoginTeacher = async (arg) => {
    return await axios
        .post(`${baseUrl}/teacher`, arg)
        .then(({data}) => data)
        .catch(e => {
            console.log(e)
        });
}


