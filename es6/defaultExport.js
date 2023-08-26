//每個檔案只能有一個預設匯出
export default {
  myName: "莉莉",
  fn() {
    console.log("我是莉莉");
  },
};

//具名匯出：每個檔案可以有多個具名匯出
export const myName = "莉莉";

export const fn = () => {
  console.log("我是莉莉");
};
