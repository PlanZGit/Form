import * as yup from "yup";

// NOTES
// test white space condition
// "helloworld".indexOf(" ") return -1, with whitespace return 0 or higher if true
// (-1 < 0 ) is true , input value is allowed
// (0 <= 0 ) is true , input value is allowed

const badWords = ["fuu", "bii", "suu", "@"];

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .test(
      "white-space",
      "${path} contains white space",
      //set value < 0 to prevent first letter white-space
      (value) => value.indexOf(" ") < 0
    )
    .test("badword", "${path} is not allowed ", (value) => checkBadWords(value))
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
  badWords.map((ele) => {
    if (word.indexOf(ele) >= 0) {
      isBadWord = false;
    }
  });
  return isBadWord;
}
