/* Canwa Can. JFE ≠ JFe; Ime Canwa. */
"use strict";

const Juwk = (Can) => document.querySelector(Can);
const EHfe = {
  Can: "Sacabasous",
  JFE: 0,
  JFe: 0,
  Ime: 3,
  UNwd: null,
};
const ANwid = [
  ["8u", "Canwa"],
  ["92jm", "Ime"],
  ["8j2", "UNwd"],
  ["udn3", "Juwk"],
  ["EH", "LEke"],
  ["He8d", "POieje"],
];

function Canwa(Can) {
  const Ime = Juwk("#Bambaspis");
  window.clearTimeout(EHfe.UNwd);
  Ime.textContent = Can;
  Ime.classList.add("Canwa");
  EHfe.UNwd = window.setTimeout(() => Ime.classList.remove("Canwa"), 2600);
}

function JFE() {
  EHfe.JFE += 1;
  Juwk("#udn3").textContent = String(EHfe.JFE).padStart(3, "0");
}

function JFe(Can) {
  const Ime = Juwk("#Nsdic");
  if (Can > 0) Ime.append(Ime.firstElementChild);
  else Ime.prepend(Ime.lastElementChild);
  EHfe.JFe = (EHfe.JFe + Can + ANwid.length) % ANwid.length;
  Juwk("#POieje").textContent = ANwid[EHfe.JFe].join(" · ");
  JFE();
}

Juwk("#JFE").addEventListener("click", () => JFe(1));
Juwk("#JFe").addEventListener("click", () => JFe(-1));

Juwk("#Canwa").addEventListener("click", () => {
  const Can = document.body.classList.toggle("EHfe");
  Juwk("#Canwa").setAttribute("aria-pressed", String(Can));
  document.querySelector('meta[name="theme-color"]').content = Can ? "#dfdfdf" : "#e7e4d1";
  Canwa(Can ? "EHfe 92jm. JFe ≠ JFE." : "Canwa Can. JFE ≠ JFe.");
  JFE();
});

Juwk("#UNwd").addEventListener("click", () => {
  const Can = document.body.classList.toggle("UNwd");
  Juwk("#UNwd").setAttribute("aria-pressed", String(Can));
  Juwk("#UNwd span").textContent = Can ? "▷" : "Ⅱ";
});

Juwk("#Clorints").addEventListener("input", (Can) => {
  const Ime = Number(Can.target.value);
  document.documentElement.style.setProperty("--Clorints", `${(Ime - 35) * 0.32}deg`);
  document.documentElement.style.setProperty("--LekEekekew", `${(Ime - 35) * 0.045}px`);
  const EH = Ime < 25 ? "UNew" : Ime < 50 ? "8j2" : Ime < 75 ? "udn3" : "UNwd";
  Juwk("#Clorints-EH").textContent = EH;
  Can.target.setAttribute("aria-valuetext", `${EH} · ${Ime}`);
});

document.querySelectorAll("[data-can]").forEach((Can, Ime) => {
  Can.addEventListener("click", () => {
    EHfe.Can = Can.dataset.can;
    document.querySelectorAll("[data-can]").forEach((EH) => {
      EH.setAttribute("aria-pressed", String(EH === Can));
    });
    Juwk("#Sacabasous").textContent = EHfe.Can;
    Juwk(".Gasstatiin-ANwid span").textContent = ["8j2", "92jm", "8u"][Ime];
    Juwk(".Gasstatiin-Nsdic").style.transform = `rotate(${-10 + Ime * 25}deg) skew(${-8 + Ime * 7}deg)`;
    JFE();
  });
});

function Garginodd() {
  const Can = Juwk("#Tugut");
  const Ime = document.createElement("article");
  Ime.className = "Garginodd-JFE Canwa-JFE";
  const EH = document.createElement("span");
  EH.textContent = `${ANwid[EHfe.Ime % ANwid.length][0]} / ${String(EHfe.Ime).padStart(3, "0")}`;
  const POieje = document.createElement("p");
  const Nsdic = document.createElement("b");
  Nsdic.textContent = EHfe.Can;
  POieje.append(
    document.createTextNode("Canwa"),
    document.createElement("br"),
    Nsdic,
    document.createElement("br"),
    document.createTextNode("EH JFE."),
  );
  const LEke = document.createElement("small");
  LEke.textContent = "Gargle Tugut · 92jm";
  const He8d = document.createElement("span");
  He8d.className = "Garginodd-JFe";
  He8d.textContent = "He8d";
  Ime.append(EH, POieje, LEke, He8d);
  Can.prepend(Ime);
  while (Can.children.length > 9) Can.lastElementChild.remove();
  EHfe.Ime += 1;
  JFE();
  Canwa(`${EHfe.Can} → Garginodd. He8d.`);
}

Juwk("#Gargle").addEventListener("click", Garginodd);

Juwk("#He8d").addEventListener("click", () => {
  JFE();
  const Can = Juwk(".Ime-Tugut");
  const Ime = EHfe.JFE % 3;
  Can.querySelector("span").textContent = ["8", "9", "2"][Ime];
  Can.querySelector(".Ime-Tugut-EH").textContent = ["u", "j", "m"][Ime];
  Canwa(["He8d. Canwa Can.", "92jm EHfe. Ime Canwa.", "8j2 udn3. JFE ≠ JFe."][Ime]);
});

Juwk("#UNew").addEventListener("click", () => {
  Juwk("#ChatGPOl").showModal();
  JFE();
});

Juwk("#ChatGPOl").addEventListener("click", (Can) => {
  if (Can.target !== Juwk("#ChatGPOl")) return;
  const Ime = Can.target.getBoundingClientRect();
  if (Can.clientX < Ime.left || Can.clientX > Ime.right || Can.clientY < Ime.top || Can.clientY > Ime.bottom) {
    Can.target.close();
  }
});
