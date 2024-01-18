import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';
import { users } from 'src/users-data';
import { User } from './model/user.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usersToDisplay: User[];
  stockUser: User[];
  searchText:string='';
  saveFilter: string ='';
  constructor(private dataService: DataService) {}

  ngOnInit() { 
    this.usersToDisplay = this.dataService.getUsersData();
    //console.log(this.dataService.getUsersData());
    this.stockUser=[...this.usersToDisplay];
  }

  onSearchTextType(searchTextEntered:string): void{
    //console.log("texte en sortie :" + searchTextEntered);
    this.searchText = searchTextEntered;
    this.genericFilter();
  }


  onSelectFilter(typeFilter: string){
    this.saveFilter = typeFilter;
    this.genericFilter();
    console.log("parent", typeFilter);
  }

  genericFilter(){
    this.stockUser = this.usersToDisplay.filter(
      (user) => user.name[this.saveFilter].toLowerCase().includes(this.searchText.toLowerCase())
    );
    }

}
