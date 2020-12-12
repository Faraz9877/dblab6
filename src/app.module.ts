import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import UserEntity from './db/entity/user.entity';
// import BooksModule from './Books/books.module';
// import BookEntity from './db/entity/book.entity';

@Module({
  imports: [UserModule ,
    TypeOrmModule.forFeature(
      [UserEntity],
    ),

    TypeOrmModule.forRoot(),

    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}