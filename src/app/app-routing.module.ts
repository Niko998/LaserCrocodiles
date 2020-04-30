import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdventuresComponent } from './adventures/adventures.component'
import { CharacterComponent } from './character/character.component'
import { StatsComponent } from './character/stats/stats.component'
import { EquipmentComponent } from './equipment/equipment.component'
import { WelcomeComponent } from "./welcome/welcome.component";

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'your-crock', component: CharacterComponent, children: [
        {path: 'stats', component: StatsComponent}
    ]},
    { path: 'adventures', component: AdventuresComponent },
    { path: 'equipment', component: EquipmentComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}