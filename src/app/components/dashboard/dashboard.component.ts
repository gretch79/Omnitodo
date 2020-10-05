import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  routingQueryParams: Subscription;
  constructor(private dialogService: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routingQueryParams = this.route.queryParams.subscribe(params => {
      if (params.display === 'inbox') {
        this.showInbox();
      }
    });
  }


  showInbox(): void {
    const dlg = this.dialogService.open(ListComponent, {
      disableClose: false
    });
    dlg.afterClosed().subscribe(_ => this.router.navigate(['dashboard']));
    // means the same
    // dlg.afterClosed().subscribe(()) => this.router.navigate(['dashboard']));
  }

}
