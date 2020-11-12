import { Repository, EntityRepository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    public async createProduct(
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        const { name,description,price} = createProductDto;

        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;

        await product.save();
        return product;
    }

    public async editProduct(
        createProductDto: CreateProductDTO,
        editedProduct: Product,
    ): Promise<Product> {
        const {  name,description,price } = createProductDto;
        const product = new Product();

        product.name = name;
        product.description = description;
        product.price = price;

        await editedProduct.save();

        return editedProduct;
    }

   




    async getProductById(id: number) {
        const query = this.createQueryBuilder('product');
        query.where('product.id = :id', {id: id})
        const product = await query.getOne()
        return product
    }
}
