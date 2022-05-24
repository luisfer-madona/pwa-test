import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
import {Router} from '@angular/router';
import swal from'sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreh: string="";
  indice: number=0;
  miheroe: Heroe={
    nombre:"",
    bio:"",
    img:"",
    aparicion:"",
    casa:""
  }; 

  error:string='';
  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router: Router,) {
    this.activatedRoute.params.subscribe(params=>{
      this.nombreh=params['nombreh'];
      this.indice=this.heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);
      
      if(this.indice != -1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }
      else{
        Swal.fire({
          title: 'No contamos con información de "' + this.nombreh + '"',
          html: 'Redireccionando a los mejores superheroes..',
          timer: 4000,
          timerProgressBar: true,
         
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
           /*  console.log('I was closed by the timer') */
          }
        })
    
        this.router.navigate(['/heroes']);
      }
    });
   
   }

   ngOnInit(){
   
  }
  

}
