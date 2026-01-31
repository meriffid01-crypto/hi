function sendWhatsApp() {

  const name = document.getElementById("fname").value;

  const dobRaw = document.getElementById("dob").value;
  const parts = dobRaw.split("-");
  const dob = parts[2] + "-" + parts[1] + "-" + parts[0];

  const gender = document.getElementById("gender").value;
  const place = document.getElementById("place").value;

  const timeRaw = document.getElementById("time").value;
  const ampm = document.getElementById("ampm").value;
  const time = timeRaw + " " + ampm;

  const question = document.getElementById("question").value;

  const phone = "917206516236";

  const msg =
`Kundali Details:
Name: ${name}
DOB: ${dob}
Gender: ${gender}
Place: ${place}
Time: ${time}
Question: ${question}`;

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);

  window.open(url, "_blank");

  // ⬇️ thank you page redirect after 1 sec
  setTimeout(() => {
    window.location.href = "thankyou.html";
  }, 1000);
}
