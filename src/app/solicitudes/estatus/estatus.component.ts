import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import {Router} from '@angular/router';

export interface Section {
  icono: String;
  date: Date;
  updated: String;
  upload: Boolean;
}

export interface DialogData {
  animal: string;
}

const uploadAPI = 'http://localhost:4200/api/upload';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.component.html',
  styleUrls: ['./estatus.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.lista-solicitudes', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class EstatusComponent implements OnInit {
  @HostBinding('@pageAnimations')
  solicitudes: Section[] = [
    {
      icono: 'cancel',
      date: new Date('1/1/19'),
      updated: 'RECHAZADA',
      upload: false
    },
    {
      icono: 'check_circle',
      date: new Date('1/1/19'),
      updated: 'Documentación Recibida: Comprobante de domicilio',
      upload: false
    },
    {
      icono: 'check_circle',
      date: new Date('1/17/19'),
      updated: 'Documentación Recibida: Reverso identificación Oficial',
      upload: false
    },
    {
      icono: 'error',
      date: new Date('1/28/19'),
      updated: 'Favor de enviar contraseñas de comprobantes de ingresos o archvios desbloqueados',
      upload: true
    },
    {
      icono: 'check_circle',
      date: new Date('2/20/19'),
      updated: 'Documentación Recibida: Comprobante de ingresos',
      upload: false
    }
  ];
  animal: string;

  constructor(public dialog: MatDialog, private router: Router) { }
  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEstatusComponent, {
      disableClose: true,
      width: '40vw',
      data: {animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  back(): void {
    this.router.navigate(['/solicitudes']);
  }

}


@Component({
  selector: 'modal-documentos',
  templateUrl: './modal-documentos.html',
  styleUrls: ['.//modal-documentos.scss']
})
export class ModalEstatusComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalEstatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  title = 'ng8fileuploadexample';
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        console.log('FileUpload:uploaded successfully:', item, status, response);
        alert('Tus archivos fueron cargados exitosamente');
        this.onNoClick();
    };
  }


}