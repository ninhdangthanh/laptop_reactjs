/** @format */

import axiosService from "../commons/axiosService";
import {API_EDNPOINT} from "./../constants/index";
import qs from "query-string";

// http://localhost:3000/tasks
const url = "/products.json";
const users = "/users.json";
// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//   },
//   withCredentials: true,
//   credentials: "same-origin",
// };

export const getListProducts = (params = {}) => {
  return axiosService.get(`https://ninhnam.github.io/webApi/products.json`);
};

export const getListUsers = (params = {}) => {
  return axiosService.get(`https://6112b10289c6d00017ac04c4.mockapi.io/api/v1/users~`);
};

// http://localhost:3000/tasks METHOD:POST
export const addTask = (data) => {
  return axiosService.post(`https://6112b10289c6d00017ac04c4.mockapi.io/api/v1/users~`, data);
};

// http://localhost:3000/tasks METHOD:PUT
export const updateCart = (data, ID) => {
  return axiosService.put(`https://6112b10289c6d00017ac04c4.mockapi.io/api/v1/users~/${ID}`, data);
};

// http://localhost:3000/tasks METHOD:DELETE
export const deleteTask = (ID) => {
  return axiosService.delete(`https://6112b10289c6d00017ac04c4.mockapi.io/api/v1/users~/${ID}`);
};
