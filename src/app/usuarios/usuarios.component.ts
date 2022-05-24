import { Component, OnInit, } from '@angular/core';
import { CargaScriptsService } from '../carga-scripts.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private carga: CargaScriptsService) { 
    carga.carga(["tablaUsuarios"]);
  }

  ngOnInit(): void {
  }

}
