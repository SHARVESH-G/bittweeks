import { departmentOptions } from "../datas/departments";

const DeptCodeFetcher = (deparment) =>{
    const match = departmentOptions.find((dept)=>dept.label.toLowerCase() === deparment.toLowerCase());
    return match.code;
}

export {DeptCodeFetcher};