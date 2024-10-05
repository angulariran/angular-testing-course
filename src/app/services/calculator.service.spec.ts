import {CalculatorService} from "./calculator.service";
import {LoggerService} from "./logger.service";


describe("CalculatorService",()=>{
let calculator:CalculatorService,
  logger:any;

  beforeEach(()=>{
      console.log("Before each called");
     logger =jasmine.createSpyObj('LoggerService',["log"]);
     calculator=new CalculatorService(logger);
  })

  it("should add 2 numbers",()=>{

    // const logger=new LoggerService();
    // spyOn(logger,"log");
    // const calculator=new CalculatorService(logger);
    const result=calculator.add(2,5);
    expect(result).withContext('should be').toBe(7)
    expect(logger.log).toHaveBeenCalledTimes(1);
    // expect(logger.log).withContext('should be called').toHaveBeenCalledTimes(1);
  });

  it("should subtract 2 numbers",()=>{

     // const logger=new LoggerService();
    //  const logger =jasmine.createSpyObj('LoggerService',["log"]);
    // const calculator=new CalculatorService(logger);
    const result=calculator.subtract(3,2);
    expect(result).withContext('should be').toBe(1);
    expect(logger.log).toHaveBeenCalledTimes(1);


  })



})
