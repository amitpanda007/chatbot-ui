import { Component, OnInit } from "@angular/core";
import { ChatService } from '../core/services/chat.service';
import { FormBuilder } from '@angular/forms';


@Component({
    selector: 'chat-bot',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.scss']
})
export class ChatComponent implements OnInit {
    private chatForm;
    private chatList = [];
    private inputText;
    private userName;
    private isUserName: boolean = false;

    constructor(fb: FormBuilder, private chatService: ChatService) {
        this.chatForm = fb.group({
            chatText: ''
          });
    }

    ngOnInit(): void {
        // window.document.documentElement.requestFullscreen();
    }

    setUserName() {
        this.isUserName = true;
    }

    sendChat() {
        if(this.chatForm.value.chatText === "hey" || this.chatForm.value.chatText === "Hey") {
            const song: any = document.querySelector('#song');
            song.play();
        }


        let chat = {};
        let self = {};
        self['chat'] = this.chatForm.value.chatText;
        self['name'] = this.userName;
        let curTime = new Date();
        self['timestamp'] = curTime.toDateString();
        chat['self'] = self;
        console.log(chat);
        this.chatService.chatWithBot(this.chatForm.value.chatText).subscribe((resp: any) => {
            console.log(resp);
            chat['bot'] = resp.bot;
            this.chatList.push(chat);
            this.chatForm.reset();
        });
    }
}