import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  getUser = async() => this.prisma.user.findMany()
}
