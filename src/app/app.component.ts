import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './login/login.page';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  rootPage: any = LoginPage;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Solicitar Serviço',
      url: '/solicitar-servico',
      icon: 'construct'
    },
    {
      title: 'Historico',
      url: '/historico',
      icon: 'bookmarks'
    },
    {
      title: 'Meus Atendimentos',
      url: '/meus-atendimentos',
      icon: 'stats'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
