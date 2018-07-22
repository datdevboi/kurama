export const getComponentData = (data: any[], componentName: string) => {
  let info;

  data.forEach(x => {
    if (x.name === componentName) {
      info = x;
    }
  });

  return info;
};
