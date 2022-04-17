import {bindable} from 'aurelia-framework'
import {Chart} from '../../node_modules/chart.js/dist/Chart.js';
import moment from 'moment';

import './statistic-information.scss'

const headers = {
    "Authorization": "Basic " + btoa(`daniilbakach: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`)
}

interface UserData {
    repos_url: string,
    created_at: Date,
    updated_at: Date
}

export class StatisticInformation{
    @bindable data: UserData;
    reposData;
    reposNames: string[] =[];
    reposCommitsCount: number[] = [];
    randomColors: string[] =[];
    
    chart;
    async attached(){
        this.chart;
        this.data;
        await this.loadReposData(); 
        console.log(this.data.repos_url)
        
    }


    async loadReposData(){
        const url = this.data.repos_url;
        const response = await fetch(url,
            {
                "method": "GET",
                "headers": headers
            });
        this.reposData = await response.json();
        console.log(this.reposData);
        await this.getReposNames(this.reposData);
        await this.getReposCommitsCount(this.reposData)
        await this.generateRandomColor()
        await this.generateCommitsChart();
    }

    getReposNames(reposData){
        for(const repository of reposData){
            this.reposNames.push(repository.name)
        }
        console.log(this.reposNames)
    }

    async getReposCommitsCount(reposData){
        for(const repository of reposData){
            for(let i = 1; i < Infinity; i){
                const url = `${repository.commits_url.slice(0, -6)}?per_page=100&page=${i}`;
                const response = await fetch(url,
                    {
                        "method": "GET",
                        "headers": headers
                    });
                const commits = await response.json();
                console.log(commits);
                if(commits.length === 100){
                    i++;
                } else{
                    this.reposCommitsCount.push((i - 1) * 100 + commits.length)
                    break;
                }
            }
            
        }
        
        console.log(this.reposCommitsCount)
    }

    get formatCreatedDate(){
        return moment(this.data.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a") + ` (${moment(this.data.created_at).fromNow()})`
    }

    get formatLastChangeDate(){
        return moment(this.data.updated_at).format("dddd, MMMM Do YYYY, h:mm:ss a") + ` (${moment(this.data.updated_at).fromNow()})`
    }

    generateRandomColor(){
        for(const i of this.reposNames){
            let color = '';
            for(let i = 0; i < 6; i++){
                color += Math.floor(Math.random() * 16).toString(16);
            }
            this.randomColors.push(`#${color}`)
        }
    }

    generateCommitsChart(){
        new Chart(this.chart, {
            type: 'pie',
            data: {
                labels: this.reposNames,
                datasets: [{
                    label: '# of Votes',
                    data: this.reposCommitsCount,
                    backgroundColor: this.randomColors,
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }
}