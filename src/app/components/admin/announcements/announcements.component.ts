import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';


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
  public inputData;
  public userId;
  public id;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
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
      this.id = this.userId;

      // this.getItemsList();
    })
    // this.userId = localStorage.getItem(user.uid);



  }

  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  addData() {
    console.log('enter');
    // if (!this.id) return;
    // this.items = this.db.list(`announcements/${this.userId}`);
    let data = this.db.collection('announcements').add({
      data: this.inputData,
    })
    console.log("data:", data);
    // this.createItem();

  }


  createItem(item: String) {
    // this.items.push(item)
    console.log("user id: ", this.userId);
  }

}