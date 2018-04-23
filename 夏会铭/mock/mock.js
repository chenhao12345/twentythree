import axios from 'axios';
import mockadapter from 'axios-mock-adapter';
import mia from './data/miaosha.js';
const mock = new mockadapter(axios);
mock.onGet('/mia').reply(200, mia);