const getS = (selector) => document.querySelector(selector);

getS(".btn-edit").onclick = () => {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");
  getS(".edit-area").value = getS(".top-block").innerHTML;
};

getS(".btn-save").onclick = () => {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
};

getS(".btn-style").onclick = () => {
  getS(".edit-block").classList.remove("show");
  getS(".style-block").classList.add("show");
};

const fontSize = () => {
  getS(".top-block").style.fontSize = event.target.value;
};

const fF = getS(".fontFamily");
fF.onclick = () => {
  getS(".choose").disabled = true;
};
fF.onchange = () => {
  getS(".top-block").style.fontFamily = event.target.value;
};

const colorArr = [
  "red",
  "coral",
  "green",
  "yellow",
  "pink",
  "purple",
  "lightblue",
  "deeppink",
  "darkgray",
];

colorArr.forEach((value, index) => {
  getS(".colors").children[index].style.backgroundColor = value;
});
getS(".btn-text-color").onclick = () => {
  getS(".colors").style.display = "flex";
  colorArr.forEach((value, index) => {
    getS(".colors").children[index].onclick = () => {
      getS(".top-block").style.color = value;
      getS(".colors").style.display = "none";
    };
  });
};

getS(".btn-bg-color").onclick = () => {
  getS(".colors").style.display = "flex";
  colorArr.forEach((value, index) => {
    getS(".colors").children[index].onclick = () => {
      getS(".top-block").style.backgroundColor = value;
      getS(".colors").style.display = "none";
    };
  });
};

getS(".fontWeight").onclick = () => {
  event.target.checked
    ? getS(".top-block").classList.add("bold")
    : getS(".top-block").classList.remove("bold");
};

getS(".fontCursive").onclick = () => {
  event.target.checked
    ? getS(".top-block").classList.add("cursive")
    : getS(".top-block").classList.remove("cursive");
};

getS(".btn-add").onclick = () => {
  getS(".first").classList.remove("show");
  getS(".second").classList.add("show");
};

const list = document.forms["form-list"];
getS(".btn-create-list").onclick = () => {
  const countLi = list.count.value;

  const typeLi = list.type.value;
  getS(".edit-area").value += `<ul type = "${typeLi}">`;

  new Array(+countLi).fill("").forEach((_, index) => {
    getS(".edit-area").value += `<li>item ${index + 1}</li>`;
  });
  getS(".edit-area").value += "</ul>";
  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
};

getS(".btn-list").onclick = () => {
  getS(".create-list").classList.add("show");
  getS(".create-table").classList.remove("show");
};

getS(".btn-table").onclick = () => {
  getS(".create-list").classList.remove("show");
  getS(".create-table").classList.add("show");
};

const table = document.forms["form-table"];
table.createTable.onclick = () => {
  const countTR = table.countTR.value;
  const countTD = table.countTD.value;
  const widthTD = table.widthTD.value;
  const heightTD = table.heightTD.value;
  const borderWidth = table.borderWidth.value;
  const borderType = table.borderType.value;
  const borderColor = table.borderColor.value;

  getS(".edit-area").value += `<table style= "border-collapse: collapse">`;

  new Array(+countTR).fill("").forEach(() => {
    getS(".edit-area").value += `<tr>`;
    new Array(+countTD).fill("").forEach(() => {
      getS(
        ".edit-area"
      ).value += `<td style="width:${widthTD}px ; height:${heightTD}px ; border:${borderWidth}px,${borderType},${borderColor} ; padding: 10px; text-align: center">`;
      getS(".edit-area").value += `TD`;
      getS(".edit-area").value += `</td>`;
    });
    getS(".edit-area").value += `</tr>`;
  });

  getS(".edit-area").value += "</table>";

  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
};
