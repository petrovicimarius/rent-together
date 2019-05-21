import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


export class Item {
  body: string;
}

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})

@Injectable()
export class AnnouncementsComponent implements OnInit {

  public items = null;
  public userId;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    // let cleaner = this.afAuth.authState.subscribe(user => {
    //   if (user) this.userId = user.uid
    //   console.log(this.userId);
    //   cleaner.unsubscribe();
    // })
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid
      }
      console.log(this.userId);

      this.getItemsList();
    })
    // this.userId = localStorage.getItem(user.uid);



  }

  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getItemsList() {
    // console.log(this.userId);

    if (!this.userId) return;
    this.items = this.db.list(`items/${this.userId}`);
    console.log("items:", this.items);
    this.createItem('asdas');

  }


  createItem(item: String) {
    // this.items.push(item)
    console.log("user id: ", this.userId);
  }

}