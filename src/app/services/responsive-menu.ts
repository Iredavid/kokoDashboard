import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveMenu {
  dataSource = new BehaviorSubject<boolean>(true);
  data$ = this.dataSource.asObservable();

}
