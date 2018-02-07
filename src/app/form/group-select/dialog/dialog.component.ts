import {Component, OnInit, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  constructor (public dialogRef: MatDialogRef<DialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  onClick(): void {
    this.dialogRef.close();
  }

  nextStep(){
    this.router.navigate(['/time']);
    this.onClick();
  }

  ngOnInit() {}

}
