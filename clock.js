const hour = document.querySelector(".h");
const minit = document.querySelector(".m");
const second = document.querySelector(".s");

setInterval(() => {
  let times = new Date();
  let curent_hour = times.getHours();
  let curent_minit = times.getMinutes();
  let curent_second = times.getSeconds();

  second.style.transform = `rotate(${animation(60, curent_second)}deg)`;
  minit.style.transform = `rotate(${animation(60, curent_minit)}deg)`;
  hour.style.transform = `rotate(${animation(12, curent_hour)}deg)`;
});

function animation(time, curent_time) {
  return (350 * curent_time) / time;
}
