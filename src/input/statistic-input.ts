import {bindable, autoinject, containerless} from 'aurelia-framework';
import {StatisticHeader} from '../header/statistic-header';
import './statistic-input.scss';

@autoinject
// @containerless
export class StatisticInput{
    constructor(private StatisticHeader: StatisticHeader){}
    
    inputValue: string;
    search = 'users';
    data;
    statusCode: number;

    async submitData(){
        await this.loadData()
        console.log(this.data.message);
    }

    

    setRepos(){
        this.search = 'repos';
    }
    setUser(){
        this.search = 'users';
    }

    async loadData(){
        const headers = {
            "Authorization": "Basic " + btoa(`daniilbakach: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`)
        }
        const url = `https://api.github.com/${this.search}/${this.inputValue}`;
        const response = await fetch(url,{
            "method": "GET",
            "headers": headers
        });
        this.statusCode = response.status;
        this.data = await response.json();
        console.log(this.data);
    }
}