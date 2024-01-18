import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchBar = new EventEmitter<string>();


  constructor() {}

  ngOnInit() {}

  onSearch(event: Event):void {
    const searchTextEntered = (event.target as HTMLInputElement).value;
    console.log("texte saisie dans la barre " + searchTextEntered);
    
    this.searchBar.emit(searchTextEntered);
  }
}
