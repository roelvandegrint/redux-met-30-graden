import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl);
  }

  public get(messageId: number): Observable<Message> {
    return this.http.get<Message>(`${this.baseUrl}/${messageId}`);
  }

  public add(message: string): Observable<Message> {
    return this.http.post<Message>(this.baseUrl, { message });
  }

  public makeRead(message: Message): Observable<Message> {
    return this.http.put<Message>(`${this.baseUrl}/${message.id}`, message);
  }
}
