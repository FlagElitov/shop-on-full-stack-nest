import { Product } from './schemas/products.schema';
import { ProductsService } from './products.service';
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get()
  //   @Redirect('https://docs.nestjs.com/cli/overview', 301)
  getAll(): Promise<Product[]> {
    return this.ProductsService.getAll();
  }
}
