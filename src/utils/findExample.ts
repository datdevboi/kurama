export const findExample = (data: any[], exampleName: string): object => {
  let ex;

  data.forEach(x => {
    if (x.name === exampleName) {
      ex = x;
    }
  });

  return ex;
};
