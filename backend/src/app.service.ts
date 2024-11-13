import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  getAll() {
    return this.data;
  }

  getById(id: number) {
    return this.data.find(item => item.id === id) || { error: 'Item not found' };
  }

  create(newItem: any) {
    const id = this.data.length + 1;
    const item = { id, ...newItem };
    this.data.push(item);
    return item;
  }
}



// import { Repository } from 'typeorm';
// constructor(@InjectRepository(YourEntity) private readonly repository: Repository<YourEntity>) {}
// async updateRecord(id: number, newValue: any): Promise<YourEntity> { ... }
