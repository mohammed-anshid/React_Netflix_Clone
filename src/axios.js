import axios from 'axios';
import { BaseUrl } from './constants/constant';

const instance = axios.create({
    baseURL: BaseUrl
});

export default instance