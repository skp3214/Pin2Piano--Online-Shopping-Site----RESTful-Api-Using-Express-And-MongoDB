const chai = require('chai');
const expect = chai.expect;
const UsersModel = require("../users/users.entity");


describe('Users Model ', () => {
    const validModel = new UsersModel({
        UserId: "1234321",
        UserName: "trevis gomes",
        Email: "trevis.gomes@gmail.com",
    });

    const inValidModel = new UsersModel();
    
    it('should be invalid if userId property is empty', function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.UserName).to.exist;
            done();
        });
    });

    it('should be invalid if userName property is empty', function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.UserName).to.exist;
            done();
        });
    });

    it('should be invalid if email property is empty', function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.Email).to.exist;
            done();
        });
    });

    
    it('should have ordersPlaced property with default value 0', function (done) {

        expect(validModel.OrdersPlaced).to.equal(0);
        done();
    });

    

});