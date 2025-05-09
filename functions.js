// Function bài 1
function getPriorityArea(priorityArea) {
  if (priorityArea === "A") {
    return 2;
  } else if (priorityArea === "B") {
    return 1;
  } else if (priorityArea === "C") {
    return 0.5;
  } else {
    return 0;
  }
}

function getPriorityObject(priorityObject) {
  if (priorityObject === "1") {
    return 2.5;
  } else if (priorityObject === "2") {
    return 1.5;
  } else if (priorityObject === "3") {
    return 1;
  } else {
    return 0;
  }
}

function calculateResult(
  benchmark,
  firstMark,
  secondMark,
  thirdMark,
  priorityArea,
  priorityObject
) {
  let areaMark = getPriorityArea(priorityArea);
  let objectMark = getPriorityObject(priorityObject);

  let sumThreeMark = firstMark + secondMark + thirdMark;
  let finalMark = sumThreeMark + areaMark + objectMark;
  let result = finalMark >= benchmark ? "Đậu" : "Rớt";

  getElemById(
    "benchmarkInfo"
  ).innerHTML = `Điểm chuẩn của hội đồng: ${benchmark}`;
  getElemById(
    "markInfo"
  ).innerHTML = `Điểm 3 môn: ${firstMark} + ${secondMark} + ${thirdMark} = ${sumThreeMark}`;
  getElemById(
    "priorityInfo"
  ).innerHTML = `Điểm ưu tiên: ${areaMark} + ${objectMark} = ${
    areaMark + objectMark
  }`;
  getElemById(
    "finalScoreInfo"
  ).innerHTML = `Tổng điểm của bạn: ${sumThreeMark} + ${areaMark} + ${objectMark} = ${finalMark}`;

  if (result === "Đậu") {
    getElemById(
      "resultInfo"
    ).innerHTML = `Kết quả: <span style="color: green;">${result}</span>`;
  } else {
    getElemById(
      "resultInfo"
    ).innerHTML = `Kết quả: <span style="color: red;">${result}</span>`;
  }
}

// Các hàm tính tiền điện bài 2
function calcElectricPhase1(kw, price) {
  const result = kw * price;
  return result;
}

function calcElectricPhase2(kw, price) {
  const result = (kw - 50) * price;
  return result;
}

function calcElectricPhase3(kw, price) {
  const result = (kw - 100) * price;
  return result;
}

function calcElectricPhase4(kw, price) {
  const result = (kw - 200) * price;
  return result;
}

function calcElectricPhase5(kw, price) {
  const result = (kw - 350) * price;
  return result;
}

function calcElectricBill(kw, price1, price2, price3, price4, price5) {
  let result = 0;
  if (kw <= 50) {
    result = calcElectricPhase1(kw, price1);
  } else if (kw <= 100) {
    result = calcElectricPhase1(50, price1) + calcElectricPhase2(kw, price2);
  } else if (kw <= 200) {
    result =
      calcElectricPhase1(50, price1) +
      calcElectricPhase2(100, price2) +
      calcElectricPhase3(kw, price3);
  } else if (kw <= 350) {
    result =
      calcElectricPhase1(50, price1) +
      calcElectricPhase2(100, price2) +
      calcElectricPhase3(200, price3) +
      calcElectricPhase4(kw, price4);
  } else {
    result =
      calcElectricPhase1(50, price1) +
      calcElectricPhase2(100, price2) +
      calcElectricPhase3(200, price3) +
      calcElectricPhase4(350, price4) +
      calcElectricPhase5(kw, price5);
  }
  return result;
}

// Các hàm tính thuế bài 3
function calcTaxableIncome(income, dependentPerson) {
  let taxableIncome = income - 4e6 * 12 - dependentPerson * 1.6e6 * 12;
  return taxableIncome;
}

function calcTaxPhase1(taxableIncome) {
  const result = taxableIncome * 0.05;
  return result;
}

function calcTaxPhase2(taxableIncome) {
  const result = (taxableIncome - 60e6) * 0.1 + calcTaxPhase1(60e6);
  return result;
}
function calcTaxPhase3(taxableIncome) {
  const result = (taxableIncome - 120e6) * 0.15 + calcTaxPhase2(120e6);
  return result;
}
function calcTaxPhase4(taxableIncome) {
  const result = (taxableIncome - 210e6) * 0.2 + calcTaxPhase3(210e6);
  return result;
}
function calcTaxPhase5(taxableIncome) {
  const result = (taxableIncome - 384e6) * 0.25 + calcTaxPhase4(384e6);
  return result;
}
function calcTaxPhase6(taxableIncome) {
  const result = (taxableIncome - 624e6) * 0.3 + calcTaxPhase5(624e6);
  return result;
}
function calcTaxPhase7(taxableIncome) {
  const result = (taxableIncome - 960e6) * 0.35 + calcTaxPhase6(960e6);
  return result;
}

function calcTax(taxableIncome) {
  let result = 0;
  if (taxableIncome <= 60e6) {
    result = calcTaxPhase1(taxableIncome);
  } else if (taxableIncome <= 120e6) {
    result = calcTaxPhase2(taxableIncome);
  } else if (taxableIncome <= 210e6) {
    result = calcTaxPhase3(taxableIncome);
  } else if (taxableIncome <= 384e6) {
    result = calcTaxPhase4(taxableIncome);
  } else if (taxableIncome <= 624e6) {
    result = calcTaxPhase5(taxableIncome);
  } else if (taxableIncome <= 960e6) {
    result = calcTaxPhase6(taxableIncome);
  } else {
    result = calcTaxPhase7(taxableIncome);
  }
  return result;
}

// Các hàm tính tiền cáp bài 4
const houseInvoiceFee = 4.5;
const houseServiceFee = 20.5;

const businessInvoiceFee = 15;
const businessServiceFee = 75;

function calcCableBill(customerType, connectionAmount, advancedConnection) {
  if (customerType == 1) {
    // Khách hàng hộ gia đình
    return calcHouseBill(houseInvoiceFee, houseServiceFee, advancedConnection);
  } else {
    // Khách hàng doanh nghiệp
    return calcBusinessBill(
      businessInvoiceFee,
      businessServiceFee,
      connectionAmount,
      advancedConnection
    );
  }
}

function calcHouseBill(houseInvoiceFee, houseServiceFee, advancedConnection) {
  let advancedConnectionFee = advancedConnection * 7.5;
  let result = houseInvoiceFee + houseServiceFee + advancedConnectionFee;

  return result;
}

function calcBusinessBill(
  businessInvoiceFee,
  businessServiceFee,
  connectionAmount,
  advancedConnection
) {
  let advancedConnectionFee = advancedConnection * 50;
  let result = businessInvoiceFee + businessServiceFee + advancedConnectionFee;
  if (connectionAmount > 10) {
    result += (connectionAmount - 10) * 5;
  }
  return result;
}
