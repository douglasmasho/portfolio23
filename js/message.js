var animation = bodymovin.loadAnimation({
  container: document.getElementById("loading-indicator2"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../anim/anim.json", // lottie file path
});

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-left",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

const nameInp = document.querySelector("#name");
const emailInp = document.querySelector("#email");
const messageInp = document.querySelector("#message");
const form = document.querySelector("#contactForm");
const loading = document.querySelector("#loading-indicator2");



form.addEventListener("submit", async(e) => {
  e.preventDefault();
  switch ("") {
    case nameInp.value:
      toastr.warning("Please enter your name");
      nameInp.focus();
      break;
    case emailInp.value:
      toastr.warning("Please enter your email");
      emailInp.focus;
      break;
    case messageInp.value:
      toastr.warning("Please enter your message");
      break;
    default:
      toastr.success("Message successfully sent");
      const details = {
        name: nameInp.value,
        email: emailInp.value,
        message: messageInp.value
      }

      try{
        loading.style.display = "block";
        form.style.display = "none";
        fetch("http://127.0.0.1:5000/api/contactme", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(details)
        })
      }catch(e){
        toastr.error("Error sending message");
        console.log(e);
      }finally{
        setTimeout(() => {
          loading.style.display = "none";
          form.style.display = "block"
        }, 1000);
      }
  }

});
