import { Commentary } from "./Commentary";

export class Tweet {
    idTweet:number;
    user:string;
    tweet:string;
    listOfComments:Commentary[];
  }