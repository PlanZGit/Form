import * as yup from "yup";

// NOTES
// test white space condition
// "helloworld".indexOf(" ") return -1, with whitespace return 0 or higher if true
// (-1 < 0 ) is true , input value is allowed
// (0 <= 0 ) is true , input value is allowed

const badWords = ["fuu", "bii", "suu"];
const reg = new RegExp("[!-/:-@[-`{-~]");
const reg2 = new RegExp("[À-ȕ ]");

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .test(
      "white-space",
      "name contains white space",
      (value) => value.indexOf(" ") < 0
    )
    .test("badword", "name is not allowed ", (value) => checkBadWords(value))
    .test(
      "sp-keys",
      "special keys [!-/:-@[-`{-~] not allowed",
      (value) => !reg.test(value)
    )
    .test(
      "sp-keys2",
      "special keys À-ȕ not allowed",
      (value) => !reg2.test(value)
    )
    .min(4)
    .max(20)
    .required("Enter a username"),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),
});

function checkBadWords(value) {
  // return true if input value do not contain badWords
  let isBadWord = true;
  let word = value.toLowerCase();

  // eslint-disable-next-line
  badWords.map((ele) => {
    if (word.indexOf(ele) >= 0) {
      isBadWord = false;
    }
  });

  return isBadWord;
}
