const Customer = require("./customer");
const CustomerAddress = require("./customer_address");
const CustUtil = require("../../utils/cust_util");
const httpConstants = require('http2').constants;

exports.createUser = (custData) => {
    const custAddress = custData.customerAddress[0];
    delete custData['customerAddress'];
    custData.customerId = CustUtil.generateCustomerId();
    custAddress.customerId = custData.customerId;
    
    Customer.create(custData);
    CustomerAddress.create(custAddress);
    return httpConstants.HTTP_STATUS_OK;
};
