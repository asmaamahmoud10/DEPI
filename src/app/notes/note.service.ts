import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }
  /*  userToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE3NDMwMzc2NTAsImV4cCI6MTc0MzA4MDg1MH0.BgL5QiZyAes_qCeAL91JnxgqJ_oFSgCtb0NWNfmVxCM'
 
   httpoptins={
     headers:new HttpHeaders({
       'Authorization':`Bearer ${this.userToken}`
     })
   } */
   ctreateNotes(note: any) {
     console.log('Create notes', note);
     const url=environment.apiUrl;
     return this.http.post(url,note);
 
 
   }
}
