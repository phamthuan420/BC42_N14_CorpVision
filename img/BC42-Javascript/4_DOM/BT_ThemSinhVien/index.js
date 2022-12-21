document.getElementById("submit").onclick = function () {
  // B1: Lấy các giá trị của các inputs
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;

  // B2: Từ các giá trị input, tạo các thẻ tr, td

  let tbody = document.getElementById("student-list");

  // Tạo thẻ tr, và đưa vào bên trong tbody
  let tr = document.createElement("tr");
  tbody.appendChild(tr);

  // Tạo thẻ td, chứa thông tin name và đưa vào bên trong tr
  let tdName = document.createElement("td");
  tdName.innerHTML = name;
  tr.appendChild(tdName);

  // Tạo thẻ td, chứa thông tin email và đưa vào bên trong tr
  let tdEmail = document.createElement("td");
  tdEmail.innerHTML = email;
  tr.appendChild(tdEmail);

  // Tạo thẻ td, chứa thông tin address và đưa vào bên trong tr
  let tdAddress = document.createElement("td");
  tdAddress.innerHTML = address;
  tr.appendChild(tdAddress);
};
