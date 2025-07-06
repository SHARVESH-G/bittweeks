import axios from 'axios'

const postNewDataToDB = async(path , data)=>{
    try{
        const res = await axios.post(`http://localhost:3000${path}` , data);
        return res;
    }catch(err){
        throw err;
    }
}