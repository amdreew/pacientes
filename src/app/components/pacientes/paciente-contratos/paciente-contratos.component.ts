import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import  { pacienteContrato} from 'src/app/model/paciente'
import { from } from 'rxjs';




const ELEMENT_DATA: pacienteContrato[] = [
  {position: 1, code: '0000001888', name: 'COOSALUD SUBSIDIADO PORTABILIDAD 2018-2019-2018', type: 'Capitada', state: 'Abierto'},
  {position: 2, code: '0000002105', name: 'COOSALUD RECUPERACION DE LA SALUD 2018 SUBSIDIADO-2014', type: 'Capitadaado',  state: 'Abierto'},
  {position: 3, code: '0000002106', name: 'COOSALUD SUBSIDIADO URGENCIA 2018-2014', type: 'Evento',  state: 'Abierto'},
  
];

@Component({
  selector: 'app-paciente-contratos',
  templateUrl: './paciente-contratos.component.html',
  styleUrls: ['./paciente-contratos.component.css']
})
export class PacienteContratosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['select', 'position', 'code', 'name', 'type', 'state'];
  dataSource = new MatTableDataSource<pacienteContrato>(ELEMENT_DATA);
  selection = new SelectionModel<pacienteContrato>(true, []); 
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: pacienteContrato): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
