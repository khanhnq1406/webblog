const Reader = (path) => {
  let fr = new FileReader();
  fr.onload = function () {
    return fr.result;
  };

  fr.readAsText(this.files[0]);
};

export default Reader;
