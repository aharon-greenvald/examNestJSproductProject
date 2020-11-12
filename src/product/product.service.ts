import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
    ) { }

    public async createProduct(
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        return await this.productRepository.createProduct(createProductDto)
    }


    public async getProducts(): Promise<any> {
        return await this.productRepository.find()
    }


    public async getProduct(productId: number): Promise<Product> {
        const foundProduct =this.productRepository.getProductById(productId)

        if (!foundProduct) {
            throw new NotFoundException('Product not found');
        }
        return foundProduct;
    }


    public async editProduct(
        productId: number,
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        //find One and Edit
        const editedProduct = this.getProduct(productId)
        if (!editedProduct) {
            throw new NotFoundException('Product not found');
        }
        return this.productRepository.editProduct(productId,createProductDto)
    }


    public async deleteProduct(productId: number): Promise<void> {
        await null // delete product
    }
}
