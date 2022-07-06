import sum from './sum';


it("When a and b is num",()=>{
    const result =sum(1,2);
    expect(result).toBe(3);
});

it("when a and b is string ",()=>{
    const result = sum("1","2");
    expect(result).toBe(3);
})