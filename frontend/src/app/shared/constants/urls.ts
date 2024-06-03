const BASE_URL = 'http://localhost:5000'

export const FOODS_URL = BASE_URL + '/api/foods';
export const FOOD_BY_ID_URL = FOODS_URL + '/food/';
export const DEALS_URL = FOODS_URL + '/deals';
export const PIZZAS_URL = FOODS_URL + '/pizzas';
export const DRINKS_URL = FOODS_URL + '/drinks';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ALL_ORDERS_URL = ORDERS_URL + '/all';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_BY_ID_URL = ORDERS_URL + '/orders/';