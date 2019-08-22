describe("Add string numbers", function() {
  
  it("Should return 3", function() {
    expect(add("1,2")).toBe(3);
  });

  it("Should return 2", function() {
    expect(add("2")).toBe(2);
  });

  it("Should return 59 ", function() {
    expect(add("1,34,21, 3")).toBe(59);
  });

  it("Should return 6", function() {
    expect(add(" 1\n 2,3")).toBe(6);
  });

  it("Should return 3", function() {
    expect(add("//;\n1;2")).toBe(3);
  });

  // it("Should return an error", function() {
  //   expect(add("-1,45")).toBe( -1 "negatives not allowed");
  // });

});