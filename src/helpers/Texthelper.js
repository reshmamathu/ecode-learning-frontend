class TextHelper {

    sentenceCase = (data) => {
      let str = data.toLowerCase()
      return str.replace(/[a-z]/i, function (letter) {
  
        return letter.toUpperCase();
  
      }).trim();
    }
  
    titleCase = (str) => {
      str = str.toLowerCase().split(' ');
      let final = [];
      for (let word of str) {
        final.push(word.charAt(0).toUpperCase() + word.slice(1));
      }
      return final.join(' ')
    }
  
    itemParser(item) {
      switch (item) {
        default: return item
      }
    }
  }
  
  
  
  const instance = new TextHelper();
  export default instance;
  