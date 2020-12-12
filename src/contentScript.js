import { message } from "antd";
// import "./content.css";
import { copyToClipboard, 不讲武德 } from "./utils";

// testcase eg: `bottom = "BCD", allowed = ["BCG", "CDE", "GEA", "FFF"], c = [1,2,3], d = 2`
function normalize(testCase) {
  testCase = testCase.replace(/\n/g, "").replace("&nbsp;", "");
  console.log(testCase);
  // 单一参数
  if (!testCase.includes("=")) {
    // 数组直接返回
    if (testCase.includes("[")) {
      return testCase;
    } else {
      // 输入: 3, 2, 0, 0
      // 输入: 0.0625

      const parts = testCase.split(",");
      if (parts.length == 0) return parts.join("");
      return parts.join("\n");
    }
  }
  let stack = [];
  let i = 0;
  while (i < testCase.length) {
    while (i < testCase.length && testCase[i] !== "=") {
      i += 1;
    }
    // skip =
    i += 1;

    while (i < testCase.length && testCase[i] !== "[" && testCase[i] != ",") {
      stack.push(testCase[i]);
      i += 1;
    }
    if (testCase[i] == ",") {
      // skip ,
      i += 1;
      stack.push("\n");
    } else {
      // cnt 左括号[ 与 右括号] 个数的差值
      let cnt = 0;
      while (i < testCase.length) {
        stack.push(testCase[i]);
        cnt += testCase[i] === "[";
        cnt -= testCase[i] === "]";
        i += 1;
        if (cnt == 0) {
          if (i !== testCase.length) {
            stack.push("\n");
          }

          break;
        }
      }
    }
  }
  return stack.join("");
}

function getProviedTestCases() {
  const possibleTags = ["pre", "p"];
  const possiblePrefixs = ["输入：", "输入:"];
  const ans = [];
  for (let tag of possibleTags) {
    const pres = document.querySelectorAll(tag);

    for (let prefix of possiblePrefixs) {
      for (var i = 0; i < pres.length; ++i) {
        if (pres[i].innerText.includes(prefix)) {
          const testcase = pres[i].innerText.match(
            new RegExp(`${prefix}(.*)输出`, "s")
          );
          console.log(testcase);
          if (testcase.length <= 1) {
            return 不讲武德();
          }
          ans.push(normalize(testcase[1]));
        }
      }
      if (ans.length > 0) return ans;
    }
  }
  return ans;
}

function insertButton() {
  const buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; ++i) {
    if (buttons[i].innerText.includes("执行代码")) {
      const copyButton = buttons[i].cloneNode(true);
      copyButton.innerText = "复制所有内置用例";
      copyButton.style["margin-left"] = "10px";
      copyButton.onclick = () => {
        const cases = getProviedTestCases();
        if (cases.filter(Boolean).length === 0) return 不讲武德();
        copyToClipboard(cases.join("\n"));
        message.success({
          content: "复制成功~",
        });
      };
      buttons[i].parentElement.prepend(copyButton);
      break;
    }
  }
}
let inserted = false;
const timerId = setInterval(() => {
  if (inserted) return clearInterval(timerId);
  insertButton();
  inserted = true;
}, 1000);

// class Main extends React.Component {
//   render() {
//     return (
//       <div className={"my-extension"}>
//         <h1 onClick={t}>Hello world - My first Extension</h1>
//       </div>
//     );
//   }
// }

// const app = document.createElement("div");
// app.id = "my-extension-root";
// document.body.appendChild(app);

// ReactDOM.render(<Main />, app);
