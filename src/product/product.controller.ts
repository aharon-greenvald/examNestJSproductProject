import { Controller, Get, HttpException, HttpStatus, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}
    @Get('all')
    public async getProducts(): Promise<[]> {
        return this.productService.getProducts()
        
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
    }
    @Get(':id')
    getProduct(@Param() params){
        return this.productService.getProduct(params.id)


    }

    @Post()
    createProduct(@Body() product:CreateProductDTO){
        return this.productService.createProduct(product)

    }
    @Put(':id')
    editProduct(@Param() params,@Body() product:CreateProductDTO){
        return this.productService.editProduct(params,product)

    }
    @Delete(':id')
    deleteProduct(@Param() params){
        return this.productService.deleteProduct(params)


    }
    
}
