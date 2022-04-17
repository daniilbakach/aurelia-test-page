import {bindable} from 'aurelia-framework'
import './empty-page.scss';

export class EmptyPage{
    @bindable showError?: boolean = false;
    @bindable statusCode?: number;
}