<template>
    <div class="ContactData">
        <h4>Enter your Contact Data</h4>
        <form v-if="!loading">
            <div class="Input">
                <label for="name" class="Label">Name</label>
                <input
                    id="name"
                    class="InputElement"
                    :class="{Invalid: $v.name.$error}"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    v-model="name"
                    @input="$v.name.$touch()"
                />
                <p v-if="$v.name.$error">This field mustn't be empty! </p>
            </div>
            <div class="Input">
                <label for="email" class="Label">Email</label>
                <input
                    type="email"
                    class="InputElement"
                    :class="{Invalid: $v.email.$error}"
                    id="email"
                    name="email"
                    placeholder="Your mail"
                    v-model="email"
                    @input="$v.email.$touch()"
                />
            </div>
            <div class="Input">
                <label for="street" class="Label">Street</label>
                <input
                    id="street"
                    class="InputElement"
                    :class="{Invalid: $v.street.$error}"
                    type="text"
                    name="street"
                    placeholder="Your Street"
                    v-model="street"
                    @input="$v.street.$touch()"
                />
            </div>

            <div class="Input">
                <label for="postal" class="Label">Zip Code</label>
                <input
                    type="text"
                    class="InputElement"
                    :class="{Invalid: $v.zipCode.$error}"
                    id="postal"
                    name="postal"
                    placeholder="Postal Code"
                    v-model="zipCode"
                    @input="$v.zipCode.$touch()"
                />
                <p v-if="$v.zipCode.$error">This field must be 5 digits! </p>
            </div>

            <div class="Input">
                <label for="country" class="Label">Street</label>
                <input
                    id="country"
                    class="InputElement"
                    :class="{Invalid: $v.country.$error}"
                    type="text"
                    name="country"
                    placeholder="Your Country"
                    v-model="country"
                    @input="$v.country.$touch()"
                />
            </div>

            <div class="Input">
                <label for="delivery" class="Label">Delivery Method</label>
                <select
                    name="delivery"
                    id="delivery"
                    class="InputElement"
                    v-model="delivery"
                >
                    <option value="fastest">Fastest</option>
                    <option value="cheapest">Cheapest</option>
                </select>
            </div>
            <Button
                btnType="Success"
                :clicked="orderHandler"
                :disabled="$v.$invalid"
            >
                Order
            </Button>
        </form>
        <Spinner v-else />
    </div>
</template>

<script>
import {
    required,
    email,
    minLength,
    maxLength,
    numeric,
} from 'vuelidate/lib/validators';
import {mapGetters} from 'vuex';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
export default {
    components: {
        Button,
        Spinner,
    },
    computed: mapGetters(['ingredients', 'totalPrice', 'purchased']),

    data() {
        return {
            name: '',
            email: '',
            street: '',
            zipCode: '',
            country: '',
            delivery: 'fastest',
            loading: false,
        };
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,
            email,
        },
        street: {
            required,
        },
        zipCode: {
            required,
            numeric,
            minLength: minLength(5),
        },
        country: {
            required,
        },
    },
    methods: {
        orderHandler() {
            event.preventDefault();

            const order = {
                ingredients: this.ingredients,
                price: this.totalPrice,
                orderData: {
                    name: this.name,
                    email: this.email,
                    street: this.street,
                    zipCode: this.zipCode,
                    country: this.country,
                    delivery: this.delivery,
                },
            };
            this.$store.dispatch('purchaseBurger', order);
        },
    },

    beforeUpdate() {
        this.$store.dispatch('purchaseInit');
    },
    updated() {},
};
</script>

<style>
.ContactData {
    margin: 20px auto;
    width: 80%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;
}

.Input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.Label {
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
    padding: 0;
    text-align: left;
    white-space: nowrap;
}

.InputElement {
    outline: none;
    border: 1px solid #ccc;
    background-color: #fff;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
}
.InputElement:focus {
    outline: none;
    background-color: #ccc;
}
.Invalid {
    border: 1px soild red;
    background-color: #fda49a;
}

@media (min-width: 600px) {
    .ContactData {
        width: 500px;
    }
}
</style>
