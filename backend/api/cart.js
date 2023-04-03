
import { Cart } from '../models/cart.js';
import { Boat } from '../models/boat.js';
import { Customer } from '../models/customer.js';
//const modelCarts = CartModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getCarts = async () => {
    const carts = await Cart.findAll({
        include: [
            {
                model: Boat,
                required: true
            },
            {
                model: Customer,
                required: true
            }
        ]
    });
    //const carts = await client.query('SELECT * from carts ORDER BY id ASC');
    return carts;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getCart = async id => {
    const cart =  await client.query('SELECT * FROM carts WHERE id = $1', [id]);
    return cart.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createCart = async cart => {
    console.log(cart.name)
    const createdCart =  await client.query('INSERT INTO carts (name, location) VALUES ($1, $2)', [cart.name, cart.location]);
    return createdCart;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateCart = async (id, cart) => {
        const updatedCart = await client.query('UPDATE carts SET name = $1, location = $2 WHERE id = $3', [
            cart.name,
            cart.location,
            id
        ]);

        return updatedCart;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteCart = async id => {
    const removedCart = client.query('DELETE FROM carts where id = $1', [
        id
    ]);

    return removedCart;
};


export default {
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart
};