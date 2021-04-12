export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const arr_diff = (a1, a2) => {
  let a = [],
    diff = [];

  for (let i = 0; i < a1.length; i++) {
    a[a1[i]] = true;
  }

  for (let i = 0; i < a2.length; i++) {
    if (a[a2[i]]) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }

  for (let k in a) {
    diff.push(k);
  }

  return diff;
};

export const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
