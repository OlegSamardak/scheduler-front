import {Component, OnInit, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: []
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
