import api from '../api/cart.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getCarts = async (req, res) => {
    res.json(await api.getCarts());
};

const getCart = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getCart(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postCart = async function (req, res, next) {

    const cart = req.body;
    const newCart = await api.createCart(cart);
    res.json(newCart);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putCart = async (req, res) => {
    const id = req.params.id;
    const cart = req.body;

    const updatedCart = await api.updateCart(id, cart) || {};
    res.json(updatedCart);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteCart = async (req, res) => {
    const id = req.params.id;

    const removedCart = await api.deleteCart(id) || {};
    res.json(removedCart);
};

export default {
    getCarts,
    getCart,
    postCart,
    putCart,
    deleteCart,
};
