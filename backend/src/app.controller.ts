import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Items') // Grupo no Swagger
@Controller('items') // Endpoint base será /items
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'ID do item' })
  getById(@Param('id') id: number) {
    return this.appService.getById(id);
  }

  @Post()
  @ApiBody({ description: 'Novo item', schema: { example: { name: 'Item Novo' } } })
  create(@Body() newItem: any) {
    return this.appService.create(newItem);
  }
}
