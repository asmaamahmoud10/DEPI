import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/notes/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  notes: any[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }
}