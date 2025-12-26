// import Customer from "../models/customer.model";
import * as bcrypt from 'bcrypt'
import { Customer } from "../models"; // index.ts

class CustomerService {
  private readonly __saltRounds = 12;
  private readonly __jwtSecret = 'TopSecretSaltValueShouldbeVeryLengthyOnminimumof256Characters';
    //   async  addCustomer(customer: Customer) {
    //     return await Customer.create({...customer}); // insert into
    // }
      addCustomer = async (customer: Customer) => {
       const { email, name, password } = customer;

      // Generate a salt (10 rounds is a common starting point)
      const salt = await bcrypt.genSalt(this.__saltRounds);
    // Hash the password
      const hashedPassword = await bcrypt.hash(password, salt);

    // Save user with the hashed password
    const newUser = new Customer({ email, name, password: hashedPassword });
    return await  newUser.save();

    //res.status(201).json({ message: 'User created successfully!' })
      //  let {email, name, password} = customer;
      //  return bcrypt.hash(password,this.__saltRounds)
      //  .then(hash => {
      //   console.log(hash);
      //   return Customer.create({email, name, password: hash});
      //  })
       // return await Customer.create({...customer}); // insert into
    }
}

export default new CustomerService(); 