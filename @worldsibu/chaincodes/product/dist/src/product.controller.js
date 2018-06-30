"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var product_model_1 = require("./product.model");
var ProductController = (function (_super) {
    tslib_1.__extends(ProductController, _super);
    function ProductController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialized = false;
        return _this;
    }
    ProductController.prototype.init = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.initialized) {
                            throw new Error('Product has already been initialized');
                        }
                        if (product.buyer) {
                            throw new Error('Due to transparency, a product cannot be initialized with a buyer.');
                        }
                        product.seller = this.sender;
                        return [4, product.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ProductController.prototype.transfer = function (productId, amount) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var product;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, product_model_1.Product.getOne(productId)];
                    case 1:
                        product = _a.sent();
                        if (amount < product.price) {
                            throw new Error('Not enough money to buy it.');
                        }
                        product.buyer = this.sender;
                        return [4, product.save()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(product_model_1.Product))
    ], ProductController.prototype, "init", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.number().moreThan(0)))
    ], ProductController.prototype, "transfer", null);
    ProductController = tslib_1.__decorate([
        convector_core_controller_1.Controller('product')
    ], ProductController);
    return ProductController;
}(convector_core_controller_1.ConvectorController));
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map