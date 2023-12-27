import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy  {

  private debouncer: Subject<string> = new Subject<string>();
  private debauncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initalValue: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.debauncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value =>{
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debauncerSuscription?.unsubscribe();
  }

  emitValue(value :string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm)
  }
}
