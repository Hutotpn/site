document.getElementById("contactVia")?.addEventListener("change", (e) => {
  const target = e.target;
  const contactMe = document.getElementById("contactMe");

  switch (target.value) {
    case "email":
      contactMe.textContent = "hutotpn@hutotpn.com";
      contactMe.href = "mailto:hutotpn@hutotpn.com";
      break;
    case "slack":
      contactMe.textContent = "@Huto";
      contactMe.href = "https://hackclub.enterprise.slack.com/team/U09PQ98JE12";
      break;
    case "discord":
      contactMe.textContent = "@hutotpn";
      contactMe.href =
        "javascript:alert('My Discord username is \"hutotpn\"!')";
      break;
    case "github":
      contactMe.textContent = "@Hutotpn";
      contactMe.href = "https://github.com/Hutotpn";
      break;
    default:
      contactMe.textContent = "";
      contactMe.href = "#";
  }
});
