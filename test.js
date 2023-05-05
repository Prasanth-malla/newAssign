describe("sumValuesByDay", () => {
  it("should correctly sum values by day", () => {
    const dictionary = {
      '2022-05-01': 10, // Sun
      '2022-05-02': 20, // Mon
      '2022-05-03': 30, // Tue
      '2022-05-04': 40, // Wed
      '2022-05-05': 50, // Thu
      '2022-05-06': 60, // Fri
      '2022-05-07': 70  // Sat
    };
    const expectedOutput = {
      'Sun': 10,
      'Mon': 20,
      'Tue': 30,
      'Wed': 40,
      'Thu': 50,
      'Fri': 60,
      'Sat': 70
    };
    expect(sumValuesByDay(dictionary)).toEqual(expectedOutput);
  });

  it("should correctly calculate mean for missing days", () => {
    const dictionary = {
      '2022-05-01': 10, // Sun
      '2022-05-02': 20, // Mon
      '2022-05-04': 40, // Wed
      '2022-05-07': 70  // Sat
    };
    const expectedOutput = {
      'Sun': 10,
      'Mon': 20,
      'Tue': 30,
      'Wed': 40,
      'Thu': 20,
      'Fri': 45,
      'Sat': 70
    };
    expect(sumValuesByDay(dictionary)).toEqual(expectedOutput);
  });

  it("should return empty object for empty input", () => {
    const dictionary = {};
    const expectedOutput = {};
    expect(sumValuesByDay(dictionary)).toEqual(expectedOutput);
  });
});
