import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'solicitar-servico', loadChildren: './solicitar-servico/solicitar-servico.module#SolicitarServicoPageModule' },
  { path: 'historico', loadChildren: './historico/historico.module#HistoricoPageModule' },
  { path: 'meus-atendimentos', loadChildren: './meus-atendimentos/meus-atendimentos.module#MeusAtendimentosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'criar-conta', loadChildren: './criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'teste', loadChildren: './teste/teste.module#TestePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
