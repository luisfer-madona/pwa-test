import { Component, OnInit } from '@angular/core';
import { CargaScriptsService } from '../carga-scripts.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public edited = false;
  constructor(private carga: CargaScriptsService, private router: Router,) { 
      carga.carga(["modalFormulario"]);
  }

  ngOnInit(): void {
  }

  llamarSwal(){
    
    this.edited = true;
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso ',
      html: 'Sus datos han sido guardados correctamente',
      timer: 4000,
      timerProgressBar: true,

  }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
          /*  console.log('I was closed by the timer') */
      }
  })

/*   this.router.navigate(['/home']); */
  }

  
}
