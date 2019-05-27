import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router: Router){}

  public goToPerfilPage(){
    this.router.navigateByUrl('/perfil')

  }
  
}
