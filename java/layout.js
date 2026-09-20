function tjekAlko(billede) {
  let type = billede.alt;
  if (type === "øl" || type === "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}

let time = new Date().getHours();

if (time >= 5 && time < 10) {
  console.log("Godmorgen");
} else if (time >= 10 && time < 18) {
  console.log("Goddag");
} else if (time >= 18 && time < 24) {
  console.log("Godaften");
} else if (time >= 24 && time < 5) {
  console.log("Godnat");
}
