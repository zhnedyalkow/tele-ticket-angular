import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { AppConfig } from "../../../config/app.config";
import { HttpClient } from "@angular/common/http";

import { Ticket } from "../../../models/tickets/ticket";
import { User } from "../../../models/users/user";

@Injectable()
export class TeamService {
    constructor(private appConfig: AppConfig, private http: HttpClient) { }

    getAllTicketsOfTeam(teamName: string): Observable<Array<Ticket>> {
        return this.http.get<Array<Ticket>>(`${this.appConfig.apiUrl}/Ticket/getAllTicketsOfTeam?team=${teamName}`);
    }

    getAllUsersOfTeam(teamName: string): Observable<Array<User>> {
        return this.http.get<Array<User>>(`${this.appConfig.apiUrl}/user/getAllUsersOfTeam?team=${teamName}`);
    }

    createTeam(formsValue: Object): Observable<Object> {
        return this.http.post<Observable<Object>>(
            `${this.appConfig.apiUrl}/team/createTeam`, formsValue
        );
    }
}