export class List {
  constructor(elems = []) {
    this.list = elems;
  }

  compare({ list }) {
    let list1 = this.list;
    let list2 = list;

    if (list1.length === list2.length) {
      return isEqual(list1, list2) ? 'EQUAL' : 'UNEQUAL';
    } else if (list1.length < list2.length) {
      return isSublist(list1, list2) ? 'SUBLIST' : 'UNEQUAL';
    } else {
      return isSublist(list2, list1) ? 'SUPERLIST' : 'UNEQUAL';
    }
  }
}

const isEqual = (list1, list2) => {
  if (list1.length === 0 && list2.length === 0) return true;
  return (list1.length === list2.length)
      && (list1.every((el, i) => el === list2[i]));
};

const isSublist = (list1, list2) => {
  const len = list1.length;
  if (len === 0) return true;
  return list2.some((_,i) => isEqual(list1, list2.slice(i, i + len)))
};
