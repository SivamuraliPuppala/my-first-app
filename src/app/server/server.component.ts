import { Component } from "@angular/core";
//component decorator
@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})

export class ServerComponent {
serverId: number = 10;
serverStatus: string = 'offline';
getServerStatus() {
    return this.serverStatus;
}
}