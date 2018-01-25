import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/observable/of";
import {Observable} from "rxjs";
import {GroupService} from "../../model/service/group.service";

@Component({
  selector: 'group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss']
})
export class GroupSelectComponent implements OnInit {

  groupName: string;
  @Output() onGroupName = new EventEmitter<string>();

  constructor(private groupService: GroupService) { }

  transmitGroup(groupName: string){
    this.groupName = groupName;
    this.checkingExistenceOfGroup(this.groupName);
    this.onGroupName.emit(this.groupName);
    //console.log(groupName);
  }



  ngOnInit() {
  }

}
