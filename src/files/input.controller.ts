import {
  Controller,
  Get,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Post,
  FilesInterceptor,
  UploadedFiles,
} from '@nestjs/common';
import { diskStorage } from 'multer';
 import * as fs from 'fs';

@UseInterceptors(FileInterceptor('files', {
  storage: diskStorage({
    destination: './uploads'
    , filename: (req, file, cb) => {
      // Generating a 32 random chars long string
      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
      // Calling the callback passing the random name generated with the original extension name
      cb(null, file.originalname)
    }
  })
}))

@Controller('input')
export class InputController {
  @Get()
  findAll() {
    return 'This action returns all cats';
  }
  @Post('uploadVarios')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files) {
    storage: diskStorage
  }
  @Post('remove')
  @UseInterceptors(FilesInterceptor('files'))
  deleteFIle(@UploadedFile() file) { 
    var filePath =`uploads/${file.originalname}`; 
    fs.unlinkSync(filePath);
  }
}
