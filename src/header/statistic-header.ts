import {bindable} from 'aurelia-framework';
import './statistic-header.scss';

export class StatisticHeader{
    constructor(){}

    @bindable searchBy: string;

    setRepos(){
        this.searchBy = 'repos';
        console.log(this.searchBy);
    }
    setUser(){
        this.searchBy = 'user';
        console.log(this.searchBy);
    }
}