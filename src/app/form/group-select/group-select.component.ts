import {Component, OnInit, OnDestroy} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material";
import "rxjs/add/observable/of";
import {GroupService} from "../../model/service/group.service";
import {ActivatedRoute, Router} from '@angular/router';
import {DataSenderService} from "../../model/service/data-sender.service";
import {DialogComponent} from "./dialog/dialog.component";
import {Subscription} from 'rxjs/Subscription';
import {FormControl, Validators} from '@angular/forms';
import {AuthorizationService} from "../../model/service/authorization.service";

@Component({
  selector: 'group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss'],
  providers: [GroupService, MatDialog, AuthorizationService]
})
export class GroupSelectComponent implements OnInit, OnDestroy {
  sub: Subscription;
  code: '';
  acceptGroup: boolean;
  groupName: string;
  dialogRef: MatDialogRef<DialogComponent>;
  emailFormControl = new FormControl('', [
    Validators.required,
  ]);
  // matcher = new MyErrorStateMatcher();

  constructor(private groupService: GroupService, public dialog: MatDialog, public dataSender: DataSenderService, private route: ActivatedRoute, private authorizationService: AuthorizationService) {
    this.acceptGroup = false;
   }

  transmitGroup(groupName: string) {
    this.groupName = groupName;
    this.dataSender.template.group = groupName;
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
        data: {accept: this.acceptGroup}
    });
  }

  checkExistence(name: string) {
    // this.groupService.checkGroupExistence(name).subscribe(accept => {
    //   this.acceptGroup = accept;
    //   this.openDialog();
    // });
    this.authorizationService.getCalendars().subscribe(response => console.dir(response));
    this.transmitGroup(name);

  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      console.log(params['code']);
      if (params['code']) {
        this.code = params['code'] || 0;
        localStorage.setItem('code', this.code);
      }
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.dataSender.template.group = this.groupName;
    console.log(this.dataSender.template.group);
  }


}
