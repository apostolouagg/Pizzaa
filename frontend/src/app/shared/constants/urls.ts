const BASE_URL = 'http://localhost:5000'

export const ITEMS_URL = BASE_URL + '/api/items';
export const ITEM_BY_ID_URL = ITEMS_URL + '/item/';
export const ITEM_BY_SEARCH_URL = ITEMS_URL + '/search/';
export const CS_URL = ITEMS_URL + '/cs';
export const ILEKTRONIKI_URL = ITEMS_URL + '/eeng';
export const MIXANOLOGIA_URL = ITEMS_URL + '/meng';
export const TILEPIKINONIES_URL = ITEMS_URL + '/tilepikinonies';
export const SALES_URL = ITEMS_URL + '/sales';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ALL_ORDERS_URL = ORDERS_URL + '/all';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_BY_ID_URL = ORDERS_URL + '/orders/';