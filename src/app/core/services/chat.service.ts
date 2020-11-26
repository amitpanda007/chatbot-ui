import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';


@Injectable()
export class ChatService{

  constructor(private http: HttpClient) {}

  chatWithBot(sentense: String) {
    const BOT_CHAT_INFO_URL = environment.apiUrl + 'bot/' + sentense;
    return this.http.get(BOT_CHAT_INFO_URL);
  }
}
