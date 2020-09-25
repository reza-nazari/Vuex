import axios from '../../axios-orders';

const state = {
    orders: [],
    loading: false,
    purchased: false,
};

const getters = {
    orders: (state) => state.orders,
    loading: (state) => state.loading,
    purchased: (state) => state.purchased,
};

const mutations = {
    PURCHASE_BURGER_START: (state) => {
        state.loading = true;
    },

    PURCHASE_BURGER_SUCCESS: (state, paylaod) => {
        const newOrder = {
            id: paylaod.output.name,
        };
        state.loading = false;
        state.purchased = true;
        paylaod.rootState.ingredients = null;
        console.log(state.orders);
        // state.order.concat(newOrder);
    },

    PURCHASE_BURGER_FAIL: (state) => (state.loading = false),

    PURCHASE_BURGER_INIT: (state) => (state.purchased = false),

    FETCH_ORDERS_SUCCESS: (state, orders) => {
        state.loading = false;
        state.orders = orders;
    },
    FETCH_ORDERS_FAIL: (state, error) => {},
};

const actions = {
    purchaseBurger: ({commit, rootState}, orderData) => {
        commit('PURCHASE_BURGER_START');
        axios
            .post('/order.json', orderData)
            .then((response) => {
                commit('PURCHASE_BURGER_SUCCESS', {
                    output: response.data,
                    rootState: rootState.burgerBuilder,
                });
            })

            .catch((err) => {
                commit('PURCHASE_BURGER_FAIL');
            });
    },
    purchaseInit: ({commit}) => {
        commit('PURCHASE_BURGER_INIT');
    },

    fetchOrders: ({commit}) => {
        axios
            .get('/order.json')
            .then((res) => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key,
                    });
                }

                commit('FETCH_ORDERS_SUCCESS', fetchOrders);
            })
            .catch((err) => commit('FETCH_ORDERS_FAIL', err));
    },
};

export default {state, getters, mutations, actions};
