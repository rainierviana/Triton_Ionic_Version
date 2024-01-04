import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'arquitetura-e-topologia',
    loadChildren: () => import('./arquitetura-e-topologia/arquitetura-e-topologia.module').then( m => m.ArquiteturaETopologiaPageModule)
  },
  {
    path: 'dashboards',
    loadChildren: () => import('./dashboards/dashboards.module').then( m => m.DashboardsPageModule)
  },
  {
    path: 'documentacao',
    loadChildren: () => import('./documentacao/documentacao.module').then( m => m.DocumentacaoPageModule)
  },
  {
    path: 'balanceador-dinamico',
    loadChildren: () => import('./balanceador-dinamico/balanceador-dinamico.module').then( m => m.BalanceadorDinamicoPageModule)
  },
  {
    path: 'custos-e-showback',
    loadChildren: () => import('./custos-e-showback/custos-e-showback.module').then( m => m.CustosEShowbackPageModule)
  },
  {
    path: 'simulacoes-e-tendencias',
    loadChildren: () => import('./simulacoes-e-tendencias/simulacoes-e-tendencias.module').then( m => m.SimulacoesETendenciasPageModule)
  },
  {
    path: 'capacidade',
    loadChildren: () => import('./capacidade/capacidade.module').then( m => m.CapacidadePageModule)
  },
  {
    path: 'desempenho',
    loadChildren: () => import('./desempenho/desempenho.module').then( m => m.DesempenhoPageModule)
  },
  {
    path: 'uso',
    loadChildren: () => import('./uso/uso.module').then( m => m.UsoPageModule)
  },
  {
    path: 'custos',
    loadChildren: () => import('./custos/custos.module').then( m => m.CustosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
