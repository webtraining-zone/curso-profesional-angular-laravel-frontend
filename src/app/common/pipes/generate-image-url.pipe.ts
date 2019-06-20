import { Pipe, PipeTransform } from '@angular/core';
import {API} from '../../config/api';

@Pipe({
  name: 'generateImageUrl'
})
export class GenerateImageUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${API.IMAGES_BASE_URL}/projects/${value}`;
  }

}
