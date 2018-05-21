/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-21 18:16:06 
 * @version 0.0.1 
 */
const getDate = () => {
  let d = new Date();
  let m = d.getMonth() + 1;
  if (m < 10) {
    m = "0" + m.toString();
  }
  let str = d.getFullYear().toString() + m + d.getDate().toString();
  return str;
}
const substring = str => {
  let _y = "",
    _m = "",
    _d = "";
  _y = str.substring(0, 4);
  _m = str.substring(4, 6);
  _d = str.substring(6, 8);
  return _y + "/" + _m + "/" + _d;
}

export {
  getDate, substring
}