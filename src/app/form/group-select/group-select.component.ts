import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {MatDialog} from "@angular/material";
import "rxjs/add/observable/of";
import {GroupService} from "../../model/service/group.service";
import {Router} from '@angular/router';
import {DataSenderService} from '../../model/service/data-sender.service';

@Component({
  selector: 'group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss'],
  providers: [GroupService, MatDialog]
})
export class GroupSelectComponent implements OnInit, OnDestroy {
  acceptGroup: boolean;
  groupName: string;
  @Output() onGroupName = new EventEmitter<string>();

  constructor(private groupService: GroupService, public dialog: MatDialog, private router: Router, private dataSender: DataSenderService) {
    this.acceptGroup = false;
   }

  get data(): any {
    return this.dataSender.template.group;
  }
  set data(value: any) {
    this.dataSender.template.group = value;
  }

  transmitGroup(groupName: string){
    this.groupName = groupName;
    this.onGroupName.emit(this.groupName);
  }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(DialogComponent, );
  // }

  checkExistence(name: string) {
    this.groupService.checkGroupExistence(name).subscribe(accept => this.acceptGroup = accept);
    this.transmitGroup(name);
    // this.openDialog();
  }

  nextStep(){
    this.router.navigate(['/time']);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.dataSender.template.group = this.groupName;
    console.log(this.dataSender.template.group);
  }

}
