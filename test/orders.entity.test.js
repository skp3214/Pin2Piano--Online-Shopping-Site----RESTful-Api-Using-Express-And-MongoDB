const chai = require('chai');
const expect = chai.expect;
const OrdersModel = require("../orders/orders.entity");

describe('Orders Model', () => {
    let validModel;
    let inValidModel;

    beforeEach(() => {
        validModel = new OrdersModel({
            OrderId: "9965321",
            OrderName: "mixed-fruit juice",
            ProductId: "12345",
            ProductName: "Sample Product",
            UserId: "67890",
            UserName: "John Doe",
            OrderDate:Date.now()
        });

        inValidModel = new OrdersModel();
    });

    it('should be invalid if orderId property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.OrderId).to.exist;
        }
    });

    it('should be invalid if orderName property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.OrderName).to.exist;
        }
    });

    it('should be invalid if productId property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.ProductId).to.exist;
        }
    });

    it('should be invalid if productName property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.ProductName).to.exist;
        }
    });

    it('should be invalid if userId property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.UserId).to.exist;
        }
    });

    it('should be invalid if userName property is empty', async () => {
        try {
            await inValidModel.validate();
            throw new Error('Expected validation error but none was thrown');
        } catch (err) {
            expect(err.errors.UserName).to.exist;
        }
    });

    it('should have unitsPlaced property with default value 0', async () => {
        expect(validModel.UnitsPlaced).to.equal(0);
    });

    

    
});
