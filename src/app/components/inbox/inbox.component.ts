import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState, selectInboxCount } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(
      select(selectInboxCount)
    );
  }

}
