export const getHighestValue = (object: Record<any, any>) => {
    return Object.keys(object).reduce(
      (prev, next) => (object[prev] > object[next] ? prev : next),
      ""
    );
  };
