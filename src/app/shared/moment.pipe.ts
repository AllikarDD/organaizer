import {Pipe, PipeTransform} from "@angular/core";
import  * as moment from 'moment'
@Pipe({
  name: "moment",
  pure: false
})

export class MomentPipe implements PipeTransform {

  transform(m: moment.Moment | null, format:string = 'MMMM YYYY'): any {
    if (m != null)
    return m.format(format)
  }


}
