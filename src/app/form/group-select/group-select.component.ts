import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss']
})
export class GroupSelectComponent implements OnInit {

  @Input() groupName: string;
  constructor() { }

  ngOnInit() {
  }

}
