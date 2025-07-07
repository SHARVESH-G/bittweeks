import axios from 'axios'
import { backEndURL } from "../datas/backendServerLink";
const postNewDataToDB = async(path , data)=>{
    try{
        const res = await axios.post(`${backEndURL}${path}` , data);
        return res;
    }catch(err){
        throw err;
    }
}

export default postNewDataToDB;