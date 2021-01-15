import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.itgenius.co.th/sandbox_api/cpallstockapi/public/api',
    headers: {
        "Content-Type":"application/json",
        // "Access-Control-Arrow-Origin": "*"
    }
})