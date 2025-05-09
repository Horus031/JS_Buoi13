// Các function submit chính của các bài
function form1OnSubmit() {
  let benchmark = getElemById("benchmark").value;
  let firstMark = getElemById("firstMark").value * 1;
  let secondMark = getElemById("secondMark").value * 1;
  let thirdMark = getElemById("thirdMark").value * 1;
  let priorityArea = getElemById("priorityArea").value;
  let priorityObject = getElemById("priorityObject").value;

  calculateResult(
    benchmark,
    firstMark,
    secondMark,
    thirdMark,
    priorityArea,
    priorityObject
  );
}

const price1 = 500;
const price2 = 650;
const price3 = 850;
const price4 = 1100;
const price5 = 1300;

function form2OnSubmit() {
  let username = getElemById("ex2-fullname").value;
  let kw = getElemById("electricValue").value * 1;
  let result = calcElectricBill(kw, price1, price2, price3, price4, price5);

  getElemById(
    "electricInfo"
  ).innerHTML = `Tiền điện của ${username} là: ${result} VNĐ`;
}

function form3OnSubmit() {
  let username = getElemById("ex3-fullname").value;
  let income = getElemById("annualIncome").value * 1;
  let dependentPerson = getElemById("dependentPerson").value * 1;

  const taxableIncome = calcTaxableIncome(income, dependentPerson);
  const personalIncomeTax = calcTax(taxableIncome);

  getElemById(
    "taxInfo"
  ).innerHTML = `Tiền thuế thu nhập cá nhân của ${username} là: ${personalIncomeTax} VNĐ`;
}

function form4OnSubmit() {
  let customerCode = getElemById("customerCode").value;
  let customerType = getElemById("customerType").value * 1;
  let connectionAmount = getElemById("connectionAmount").value * 1;
  let advancedConnection = getElemById("advancedConnection").value * 1;

  const result = calcCableBill(
    customerType,
    connectionAmount,
    advancedConnection
  );

  getElemById(
    "cableInfo"
  ).innerHTML = `Mã khách hàng: ${customerCode}; Tiền cáp: $${result}`;
}

function typeOnChange() {
  let type = getElemById("customerType").value;
  if (type == 2) {
    getElemById("connectionAmountDiv").style.display = "block";
  } else {
    getElemById("connectionAmountDiv").style.display = "none";
  }
}

// Hàm get element theo id
function getElemById(id) {
  return document.getElementById(id);
}
