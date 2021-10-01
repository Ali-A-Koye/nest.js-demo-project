import { ProductService } from './product.service';
import { DataGridDto } from 'src/utils/validator/common.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    readDataGrid(query: DataGridDto): Promise<{
        data: Array<object>;
        pages: number;
        records: number;
    }>;
}