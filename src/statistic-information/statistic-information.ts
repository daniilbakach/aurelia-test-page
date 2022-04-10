import {bindable} from 'aurelia-framework'
import {Chart} from '../../node_modules/chart.js/dist/Chart.js';
import moment from 'moment';

import './statistic-information.scss'

export class StatisticInformation{
    @bindable data: any;
    reposData;
    reposNames: any =[];
    reposCommitsCount: any = [];
    
    chart;
    async attached(){
        this.chart;
        this.data;
        await this.loadReposData(); 
        console.log(this.data.repos_url)
        new Chart(this.chart, {
            type: 'pie',
            data: {
                labels: this.reposNames,
                datasets: [{
                    label: '# of Votes',
                    data: this.reposCommitsCount,
                    // backgroundColor: [
                    //     'rgba(255, 99, 132, 0.2)',
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)',
                    //     'rgba(255, 159, 64, 0.2)'
                    // ],
                    // borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)',
                    //     'rgba(255, 159, 64, 1)'
                    // ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'chartArea',
                    }
                }
            }
        });
    }


    async loadReposData(){
        const url = this.data.repos_url;
        const response = await fetch(url);
        this.reposData = await response.json();
        console.log(this.reposData);
        await this.getReposNames(this.reposData);
        await this.getReposCommitsCount(this.reposData)
    }

    getReposNames(reposData){
        for(const repository of reposData){
            this.reposNames.push(repository.name)
        }
        console.log(this.reposNames)
    }

    async getReposCommitsCount(reposData){
        for(const repository of reposData){
            const url = repository.commits_url.slice(0, -6);
            const response = await fetch(url);
            const commits = await response.json();
            this.reposCommitsCount.push(commits.length)
            
        }
        console.log(this.reposCommitsCount)
    }

    get formatCreatedDate(){
        return moment(this.data.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a") + ` (${moment(this.data.created_at).fromNow()})`
    }

    get formatLastChangeDate(){
        return moment(this.data.updated_at).format("dddd, MMMM Do YYYY, h:mm:ss a") + ` (${moment(this.data.updated_at).fromNow()})`
    }
}