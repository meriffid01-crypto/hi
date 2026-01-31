function sendWhatsApp() {

  const name = document.getElementById("fname").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const place = document.getElementById("place").value;

  const timeRaw = document.getElementById("time").value;
  const ampm = document.getElementById("ampm").value;
  const time = timeRaw + " " + ampm;

  const question = document.getElementById("question").value;

  const phone = "917206516236"; // ← apna number daalo

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
}
