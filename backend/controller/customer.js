import api from '../api/customer.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getCustomers = async (req, res) => {
    res.json(await api.getCustomers());
};

const getCustomer = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getCustomer(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postCustomer = async function (req, res, next) {

    const customer = req.body;
    const newCustomer = await api.createCustomer(customer);
    res.json(newCustomer);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putCustomer = async (req, res) => {
    const id = req.params.id;
    const customer = req.body;

    const updatedCustomer = await api.updateCustomer(id, customer) || {};
    res.json(updatedCustomer);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteCustomer = async (req, res) => {
    const id = req.params.id;

    const removedCustomer = await api.deleteCustomer(id) || {};
    res.json(removedCustomer);
};

export default {
    getCustomers,
    getCustomer,
    postCustomer,
    putCustomer,
    deleteCustomer,
};
