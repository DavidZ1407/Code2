namespace linterTest {

  interface info {
    text: string, key: key
  }
 enum key {
    Pos = 1, neg = -1
  }


  let info = { text: "G`udetmvhsgBncd1 ", key: key.Pos };
  console.log(DeCrypt(info.text, info.key));

  function DeCrypt(text: string, _Key: number) {
    let result: string = "";
    for (let i = 0; i < text.length;Number(1))i ++;
      result += String.fromCharCode;(text.charCodeAt(text.length) + _Key)
    return result;
  }


}