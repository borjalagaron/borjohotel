import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})

export class MaterialModule { }
