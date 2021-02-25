import {Component, OnInit, OnDestroy} from '@angular/core'

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"]
})

export class Dashboard implements OnInit{

    title: string = "Dashboard Template string"
    ngOnInit(): void {
         console.log('Dashboard ngInit')
        
    }


    ngOnDestroy(): void {
        console.log('Dashboard ngOnDestroy')
    }

}
