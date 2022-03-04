var Answers = [];

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function Get(url) {
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      go(result);
    })
    .catch((error) => console.log("error", error));
}
async function Get2(url) {
  try {
    let res = await fetch(url);

    return await res.jsontext();
  } catch (error) {
    console.log(error);
  }
}

let j = window.performance.getEntries();
for (var x in j) {
  if (j[x].name.length == 779) {
    var url = j[x].name;
    // var response = Get(url);
    Get(url);
    break;
  }
}

function WriteToList(title, content) {
  q = { title: title, content: content };
  Answers.push(q);
}

function multiple_choice(q) {
  // console.log(q)
  WriteToList(q.content.question, q.content.correctAnswer);
}

function exact_list(q) {
  console.log(q.content.statement);
  // console.log(q.moduleType)
  let list = [];
  for (let i in q.content.values) {
    let AnswerArray = q.content.values[i];
    console.log(AnswerArray.value[0].word);
    list.push(AnswerArray.value[0].word);
  }
  WriteToList(q.content.statement, list);
}

function multiSelect(q) {
  console.log(q.content.question);
  for (let i in q.content.options) {
    if (q.content.options[i].correct === true) {
      let answer = q.content.options[i].text;
      console.log(answer);
      WriteToList(q.content.question, answer);
    }
  }
}

function image_multi_choice(q) {
  console.log(q.content.title);
  for (let i in q.content.values) {
    if (q.content.values[i].isCorrect === true) {
      let answer = +i + 1;
      console.log(answer);
      WriteToList(q.content.title, answer);
    }
  }
}
function wordfill(q) {
  // console.log(q)
  console.log("Wordfill:");
  for (let i in q.content.words) {
    let word = q.content.words[i].word;
    if (typeof word != "undefined") {
      console.log(word);
      WriteToList("Wordfill", word);
    }
  }
}
function list(q) {
  // console.log(q)
  console.log(q.content.statement);
  let list = [];
  for (let i in q.content.values) {
    for (let ii in q.content.values[i]) {
      console.log(q.content.values[i].value[1].word);
      list.push(q.content.values[i].value[1].word);
    }
  }
  WriteToList(q.content.statement, list);
}
function grid(q) {
  console.log(q);
  console.log(q.content.title);
}

function go(json) {
  let Questions = json.contents[0].contentModules;
  var ParsedQuestions = [];
  for (let i in Questions) {
    let q = Questions[i];
    if (
      q.moduleType === "image" ||
      q.moduleType === "concept" ||
      q.moduleType === "image-description"
    ) {
      Questions.pop(i);
      continue;
    }
    ParsedQuestions.push(q);
  }
  for (let x in ParsedQuestions) {
    var q = ParsedQuestions[x];

    // console.log(q.moduleType)

    // types:
    // exact-list DONE
    // multiple-choice DONE
    // image-multi-choice DONE
    // multiSelect DONE
    // image-description DONE
    // wordfill DONE
    // list DONE

    // grid

    if (1 < 0) {
    }

    if (q.moduleType === "exact-list") {
      exact_list(q);
    } else if (q.moduleType === "multiple-choice") {
      multiple_choice(q);
    } else if (q.moduleType === "multiSelect") {
      multiSelect(q);
    } else if (q.moduleType === "image-multi-choice") {
      image_multi_choice(q);
    } else if (q.moduleType === "wordfill") {
      wordfill(q);
    } else if (q.moduleType === "list") {
      list(q);
    } else if (q.moduleType === "grid") {
      grid(q);
    }
  }
console.log(Answers); 

}
