import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss']
})
export class UserDetailsFormComponent implements OnInit {
  @Input() username: string;
  @Output() takethis: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  something(payload){
      this.takethis.emit(payload)
  }
}
