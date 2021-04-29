
import { AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,Component,OnDestroy,OnInit,OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit,OnChanges,DoCheck,AfterContentInit,
                      AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  constructor() {
    console.log('constructor')

   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfteViewInit');
  }
  ngAfterViewChecked(): void {
   console.log('NgAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('NgOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }


}
