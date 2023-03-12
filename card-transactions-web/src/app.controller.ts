import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  getHello(): string {    
    return this.appService.getHello();
  }

  @Get('/ct-web')
  @Render('index')
  root() {    
    console.log('index @ :: '+Date.now())
    return { message: 'Hello world! - Welcome to Home Tour..!!' };
  }
  
}
