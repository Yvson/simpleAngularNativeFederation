import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
    {
      path: '',
      loadComponent: () =>
        loadRemoteModule({
            remoteName: 'angularApp1',
            remoteEntry: 'http://localhost:4300/Component.js',
            exposedModule: './Component'
        }).then((m) => m.AppComponent),
      pathMatch: 'full',
    },
];
