
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  private initModel(): void {
  }
}
// import { Component, OnInit, Input, DoCheck, KeyValueDiffers } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import * as moment from 'moment';
// import { ChatService } from '../app/chat.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   message: string;
//   messages: string[] = [];

//   constructor(private chatService: ChatService) {
//   }

//   sendMessage() {
//     this.chatService.sendMessage(this.message);
//     this.message = '';
//   }

//   OnInit() {
//     this.chatService
//       .getMessages()
//       .subscribe((message: string) => {
//         const currentTime = moment().format('hh:mm:ss a');
//         const messageWithTimestamp = `${currentTime}: ${message}`;
//         this.messages.push(messageWithTimestamp);
//       });

//   }
// }
