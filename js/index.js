
function sendMail() {
  var params = {
    name: document.getElementById("name_send").value,
    email: document.getElementById("email_send").value,
    phone: document.getElementById("phone_send").value,
    message: document.getElementById("message_send").value,
  };

  const serviceID = "service_s05h9qs";
  const templateID = "template_kip8zok";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name_send").value = "";
      document.getElementById("email_send").value = "";
      document.getElementById("phone_send").value = "";
      document.getElementById("message_send").value = "";
      console.log(res);
      alert("votre message a été envoyé avec succès !")

    }).catch(err => console.log(err));
}
