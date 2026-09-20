function tjekAlko(billede) {
  let type = billede.alt;
  if (type === "øl" || type === "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
