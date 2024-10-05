import {CalculatorService} from "./calculator.service";
import {LoggerService} from "./logger.service";


describe("CalculatorService",()=>{


  it("should add 2 numbers",()=>{

    const logger=new LoggerService();
    const calculator=new CalculatorService(logger);
    const result=calculator.add(2,5);
    expect(result).withContext('should be').toBe(7)

  });

  it("should subtract 2 numbers",()=>{

     const logger=new LoggerService();
    const calculator=new CalculatorService(logger);
    const result=calculator.subtract(3,2);
    expect(result).withContext('should be').toBe(1)


  })



})
