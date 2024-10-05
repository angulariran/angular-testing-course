import {inject, Injectable} from '@angular/core';
import {LoggerService} from './logger.service';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // private logger=inject(LoggerService);
  //

  constructor(private logger: LoggerService) {

  }

  add(n1: number, n2:number) {
    this.logger.log('Addition operator called');
    return n1 + n2;
  }

  subtract(n1: number, n2:number) {
    this.logger.log('Subtraction operator called')
    return n1 - n2;
  }


}

