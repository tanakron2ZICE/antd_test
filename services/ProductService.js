import http from '../constants/_confixAxios';

//  GET All Product
const getAllProduct = () => {
    return http.get('/products')
}

// GET By ID
const getProductByID = (id) => {
    return http.get(`/products/${id}`)
}

// ADD New Product
const addNewProduct = (data) => {
    return http.post(`/products`, data)
}

// UPDATE Product
const updateProduct = (id, data) => {
    return http.put(`/products/${id}`, data)
}

// UPDATE Product
const deleteProduct = (id) => {
    return http.delete(`/products/${id}`)
}

export default {
    getAllProduct,
    getProductByID,
    addNewProduct,
    updateProduct,
    deleteProduct
}