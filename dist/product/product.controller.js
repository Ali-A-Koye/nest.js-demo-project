"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const common_dto_1 = require("../utils/validator/common.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    readDataGrid(query) {
        const readData = this.productService.readDataGridQuery(query.pageSize, query.page, query.filters, query.sortArray);
        return Promise.all(readData).then((result) => {
            const [data, [dataCount]] = result;
            const pages = Math.ceil(dataCount.count / query.pageSize);
            return {
                data,
                pages,
                records: dataCount.count,
            };
        });
    }
    readlist(query) {
        const readData = this.productService.readListQuery(query.limit, query.offset);
        if (query.q) {
            readData.andWhere('product.name', 'like', `%${query.q}%`);
        }
        return Promise.resolve(readData);
    }
};
__decorate([
    (0, common_1.Get)('/grid'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.DataGridDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "readDataGrid", null);
__decorate([
    (0, common_1.Get)('/list'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_dto_1.DataListDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "readlist", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map