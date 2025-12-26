import {Request, Response} from 'express'
import customerService from '../services/customer.service';

class CustomerController {
    async register(req:Request, res: Response) {
            const products = await customerService.addCustomer(req.body);
            res.status(200).send(products);
    }
}

export default new CustomerController();