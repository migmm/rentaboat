
import { Customer } from '../models/customer.js';
import { Rental } from '../models/Rental.js';
import { Cart } from '../models/Cart.js';
import { Avatar } from '../models/Avatar.js';
//const modelCustomers = CustomerModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getCustomers = async () => {
    const customers = await Customer.findAll({
        include: [
            {
                model: Rental,
                required: true
            },
            {
                model: Cart,
                required: true
            },
            {
                model: Avatar,
                required: true
            }
        ]
    });
    //const customers = await client.query('SELECT * from customers ORDER BY id ASC');
    return customers;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getCustomer = async id => {
    const customer =  await client.query('SELECT * FROM customers WHERE id = $1', [id]);
    return customer.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createCustomer = async customer => {
    console.log(customer.name)
    const createdCustomer =  await client.query('INSERT INTO customers (name, location) VALUES ($1, $2)', [customer.name, customer.location]);
    return createdCustomer;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateCustomer = async (id, customer) => {
        const updatedCustomer = await client.query('UPDATE customers SET name = $1, location = $2 WHERE id = $3', [
            customer.name,
            customer.location,
            id
        ]);

        return updatedCustomer;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteCustomer = async id => {
    const removedCustomer = client.query('DELETE FROM customers where id = $1', [
        id
    ]);

    return removedCustomer;
};


export default {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
};