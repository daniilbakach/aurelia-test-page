import {bindable, autoinject, containerless} from 'aurelia-framework';
import './statistic-input.scss';

@autoinject
// @containerless
export default class StatisticInput{
    constructor(){}
    @bindable inputValue: string;

    submitData(e){
        e.preventDefault();
        console.log('log')
        console.log(this.inputValue);
    }
}