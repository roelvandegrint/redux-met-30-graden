import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly baseUrl = 'http://localhost:3000';
  private readonly delay = 1000;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl).pipe(delay(this.delay));
  }

  public get(messageId: number): Observable<Message> {
    return this.http.get<Message>(`${this.baseUrl}/${messageId}`).pipe(delay(this.delay));
  }

  public add(message: string): Observable<Message> {
    return this.http.post<Message>(this.baseUrl, { message }).pipe(delay(this.delay));
  }

  public toggle(message: Message): Observable<Message> {
    return this.http.put<Message>(`${this.baseUrl}/${message.id}`, message).pipe(delay(this.delay));
  }

  public remove(messageId: number): Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}/${messageId}`).pipe(delay(this.delay));
  }
}
