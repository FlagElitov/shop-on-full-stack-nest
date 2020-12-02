import { Product } from './schemas/products.schema';
import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get()
  //   @Redirect('https://docs.nestjs.com/cli/overview', 301)
  getAll(): Promise<Product[]> {
    return this.ProductsService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.ProductsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-control', 'none')
  create(@Body() CreateProductDto: CreateProductDto): Promise<Product> {
    return this.ProductsService.create(CreateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.ProductsService.remove(id);
  }

  @Put(':id')
  update(
    @Body() UpdateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.ProductsService.update(id, UpdateProductDto);
  }
}
