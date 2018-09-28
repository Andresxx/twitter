import { Tweet } from "./structures/Tweet";
import { Commentary } from "./structures/Commentary";



export const listOfComments1:Commentary[]=[
    {idCommentary:7845965, user:'b',Comment:'Como es'},
    {idCommentary:7845966, user:'b',Comment:'Como es'},
    {idCommentary:7845967, user:'a',Comment:'Como es'},
    {idCommentary:7845968, user:'a',Comment:'Como es'},
    {idCommentary:7845969, user:'a',Comment:'Como es'},

];




export const listOftweets:Tweet[]=[
    {idTweet:6985874,user:'a', tweet:'hola',listOfComments:listOfComments1},
    {idTweet:6985875,user:'a', tweet:'como',listOfComments:[]},
    {idTweet:6985876,user:'b', tweet:'estas',listOfComments:[]},
    {idTweet:6985877,user:'b', tweet:'tu',listOfComments:[]},
];