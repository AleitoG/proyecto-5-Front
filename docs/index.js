const principalContainer = document.createElement("div");
principalContainer.classList.add("principalContainer");

const container = document.createElement("div");
container.classList.add("container");

const formContainer = document.createElement("div");
formContainer.classList.add("formContainer");

const form = document.createElement("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: Math.floor(Math.random() * 1000),
    name: Uname.value,
    email: email.value,
    phone: phone.value,
    datefrom: dateFrom.value,
    dateto: dateTo.value,
    roomtype: roomType.value,
    people: parseInt(people.value),
  };

  fetch("https://proyecto-5-production-730c.up.railway.app/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  container.innerHTML = `
        <div class="row">
            <div class="col">
                <h1>Nombre: ${data.name}</h1>
                <p>Correo:${data.email}</p>
                <p>Número: ${data.phone}</p>
                <p>Estancia: ${data.dateFrom} - ${data.dateTo}</p>
                <p>Tipo de habitación: ${data.roomType}</p>
                <p>Personas: ${data.people}</p>
            </div>
        </div>
    `;
});

//inputs
const Uname = document.createElement("input");
const email = document.createElement("input");
const phone = document.createElement("input");
const dateFrom = document.createElement("input");
const dateTo = document.createElement("input");
const roomType = document.createElement("select");
roomType.innerHTML = `<option value="single">Sencila</option>
<option value="double">Doble</option>
<option value="suite">Suite</option>`;
const people = document.createElement("input");
const btn = document.createElement("button");

Uname.type = "text";
email.type = "email";
phone.type = "number";
dateFrom.type = "date";
dateTo.type = "date";
people.type = "number";
btn.textContent = "Reservar";

Uname.id = "a1";
email.id = "a2";
phone.id = "a3";
dateFrom.id = "a4";
dateTo.id = "a5";
roomType.id = "a6";
people.id = "a7";
btn.id = "a9";

//labels
const UnameLabel = document.createElement("label");
const emailLabel = document.createElement("label");
const phoneLabel = document.createElement("label");
const dateFromLabel = document.createElement("label");
const dateToLabel = document.createElement("label");
const roomTypeLabel = document.createElement("label");
const peopleLabel = document.createElement("label");
const Label = document.createElement("label");
const btnLabel = document.createElement("label");

UnameLabel.textContent = "Nombre:";
emailLabel.textContent = "Email:";
phoneLabel.textContent = "Número de contacto:";
dateFromLabel.textContent = "Fecha de entrada:";
dateToLabel.textContent = "Fecha de salida:";
roomTypeLabel.textContent = "Tipo de habitación:";
peopleLabel.textContent = "Número de personas:";

UnameLabel.id = "b1";
emailLabel.id = "b2";
phoneLabel.id = "b3";
dateFromLabel.id = "b4";
dateToLabel.id = "b5";
roomTypeLabel.id = "b6";
peopleLabel.id = "b7";

formContainer.append(
  UnameLabel,
  Uname,
  emailLabel,
  email,
  phoneLabel,
  phone,
  dateFromLabel,
  dateFrom,
  dateToLabel,
  dateTo,
  roomTypeLabel,
  roomType,
  peopleLabel,
  people,
  btn
);

form.append(formContainer);

document.body.appendChild(principalContainer);
principalContainer.appendChild(form);
principalContainer.appendChild(container);
