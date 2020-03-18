import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'cardoor';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    isPaymentWindow() {
        if (this.router.url === '/payment') {
            return false;
        } else {
            return true;
        }
    }

    isAdminWindow() {
        if (this.router.url === '/admin') {
            return true;
        } else {
            return false;
        }
    }
}
