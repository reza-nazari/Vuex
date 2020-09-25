import axios from "../../axios-orders";

const state = {
    ingredients: null,
    totalPrice: 4,
    error: false,
};

const INGRENDIENT_PRICES = {
    cheese: 1.5,
    salad: 0.5,
    meat: 3,
    bacon: 2,
};

const getters = {
    ingredients: (state) => state.ingredients,
    totalPrice: (state) => state.totalPrice,
    error: (state) => state.error,
};

const mutations = {
    setIngredients: (state, payload) => {
        state.ingredients = payload;
        state.totalPrice = 4;
    },
    fetchIngredientsFailed: (state) => (state.error = true),
    addIngredient: (state, payload) => {
        state.ingredients[payload.ingredientName] =
            state.ingredients[payload.ingredientName] + 1;

        state.totalPrice =
            state.totalPrice + INGRENDIENT_PRICES[payload.ingredientName];
    },

    removeIngredient: (state, payload) => {
        state.ingredients[payload.ingredientName] =
            state.ingredients[payload.ingredientName] - 1;

        state.totalPrice =
            state.totalPrice - INGRENDIENT_PRICES[payload.ingredientName];
    },
};

const actions = {
    onInitIngredients: ({ commit }) => {
        axios
            .get("/ingredients.json")
            .then((response) => {
                commit("setIngredients", response.data);
            })
            .catch((err) => {
                commit("fetchIngredientsFailed");
            });
    },
    onAddIngredient: ({ commit }, payload) => commit("addIngredient", payload),
    onRemoveIngredient: ({ commit }, payload) =>
        commit("removeIngredient", payload),
};

export default { state, getters, mutations, actions };
