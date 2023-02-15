function ucFirst(str) {
  if (!str) {
    return str;
  } else if (ucFirst('в') === 'В' && ucFirst('') === '') {
    return str[0].toUpperCase() + str.slice(1);
  }
}
