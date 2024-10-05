import {CalculatorService} from "./calculator.service";
import {LoggerService} from "./logger.service";
import {TestBed} from "@angular/core/testing";

describe("CalculatorService",()=>{

  let calculator:CalculatorService,
    logger:any;


  beforeEach(()=>{
    console.log("Before each called");
     logger =jasmine.createSpyObj("LoggerService",["log"])

     TestBed.configureTestingModule({
       providers:[CalculatorService,{provide:LoggerService,useValue:logger}]
     })
    //calculator=new CalculatorService(logger);
    // calculator=TestBed.get(CalculatorService);
    calculator=TestBed.inject(CalculatorService);
  })
  fit("should subtract 2 numbers",()=>{

    const result = calculator.subtract(3,2);
    expect(result).withContext("should be").toBe(1);
  })

  it("should add 2 numbers",()=>{
      // // const logger=new LoggerService();
      // const logger =jasmine.createSpyObj("LoggerService",["log"])
      //  //spyOn(logger,"log")
      // const calculator=new CalculatorService(logger);
      const result=calculator.add(2,5);
      expect(result).withContext("should be").toBe(7);
      expect(logger.log).toHaveBeenCalledTimes(1);
      fail()
  });

})
