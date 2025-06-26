import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<string> {
    const login = { email, senha };
    return this.http.post(this.apiUrl + '/login', login, { responseType: 'text' });
  }
}
