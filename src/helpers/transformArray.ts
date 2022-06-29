export const removeItemFromArray = (array: any[], index: number) => {
  const newItems = array.slice();
  newItems.splice(index, 1);

  return newItems;
}
