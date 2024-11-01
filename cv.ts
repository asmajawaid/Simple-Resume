window.addEventListener("load", () => {
  const FullName = localStorage.getItem("FullName");
  const design = localStorage.getItem("design");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const address = localStorage.getItem("address");
  const pass = localStorage.getItem("pass");
  const inst = localStorage.getItem("inst");
  const degree = localStorage.getItem("degree");
  const pass2 = localStorage.getItem("pass2");
  const inst2 = localStorage.getItem("inst2");
  const degree2 = localStorage.getItem("degree2");
  const skill1 = localStorage.getItem("skill1");
  const skill2 = localStorage.getItem("skill2");
  const skill3 = localStorage.getItem("skill3");
  const skill4 = localStorage.getItem("skill4");
  const skill5 = localStorage.getItem("skill5");
  const skill6 = localStorage.getItem("skill6");
  const language = localStorage.getItem("language");
  const language2 = localStorage.getItem("language2");
  const startyear = localStorage.getItem("startyear");
  const endyear = localStorage.getItem("endyear");
  const company = localStorage.getItem("company");
  const companyloc = localStorage.getItem("companyloc");
  const job = localStorage.getItem("job");
  const achvmnt1 = localStorage.getItem("achvmnt1");
  const achvmnt2 = localStorage.getItem("achvmnt2");
  const chvmnt3 = localStorage.getItem("achvmnt3");
});

// print button
const printBtn = document.getElementById("printBtn");

printBtn?.addEventListener("click", () => {
  window.print();
});
