import { shareReplay, filter, tap, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { User } from "../model/user";

export const ANONYMOUS_USER: User = {
  id: undefined,
  email: undefined,
  roles: [],
};

@Injectable()
export class AuthService {}
