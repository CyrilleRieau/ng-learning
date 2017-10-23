import { Component, OnInit } from '@angular/core';
import { Chien } from '../shared/chien';
import { ActivatedRoute } from '@angular/router';
import { ChienService } from '../shared/chien/chien.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-fiche-chien',
  templateUrl: './fiche-chien.component.html',
  styleUrls: ['./fiche-chien.component.css']
})
export class FicheChienComponent implements OnInit {
  chien:Chien;

  //ActivatedRoute est un service de RouterModule qui
  //contient des informations relatives à la route
  //sur laquelle on est actuellement (path, arguments, etc.)
  constructor(private route:ActivatedRoute,
              private chienService:ChienService) { }

  ngOnInit() {
    //On peut récupérer les paramètres de l'url sous
    //forme d'un Observable depuis le ActivatedRoute
    this.route.params.filter((params)=>parseInt(params.id) > 0 )
    .mergeMap((params)=>
    this.chienService.getById(params.id))
    .subscribe((chien)=>this.chien = chien);
   
    

  }

  

}
