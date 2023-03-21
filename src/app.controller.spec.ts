import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

describe('AppController', () => {
  let appController: AppController;
  let mockAppService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
    mockAppService = app.get<AppService>(AppService)
  });

  describe('root', () => {
    it('should return users', async() => {
      jest.spyOn(mockAppService, 'getUser').mockImplementation(() => Promise.resolve([
        {
          id: "6f0e4c61-3a80-4e10-88c6-e0e623c7c373",
          email: "user-test@email.com",
          name: "pokemon"
        }
      ]))
      const users = await appController.getUser()
      expect(users).toMatchObject([{
        id: "6f0e4c61-3a80-4e10-88c6-e0e623c7c373",
        email: "user-test@email.com",
        name: "pokemon"
      }])
    });
  });
});
