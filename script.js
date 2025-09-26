class Tanaman {
    constructor(nama) {
        this.nama = nama;
        this.tinggi = 0;
        this.hidup = true;
    }

    tumbuh(cm) {
        if (this.hidup) {
            this.tinggi += cm;
        }
    }
    
    mati() {
        this.hidup = false;
    }

    status() {
        if (this.hidup) {
            return `${this.nama} tumbuh setinggi ${this.tinggi} cm`;
        } else {
            return `${this.nama} sudah mati`;
        }
    }
}

class Air {
    siram(tanaman) {
        if (tanaman.hidup) {
            tanaman.tumbuh(2);
            alert(`${tanaman.nama} disiram, tumbuh 2 cm`);
        }
    }
}

class Pupuk {
    beri(tanaman) {
        if (tanaman.hidup) {
            tanaman.tumbuh(5);
            alert(`${tanaman.nama} diberi pupuk, tumbuh 5 cm`)
        }
    }
}

const kebun = document.getElementById("kebun");
const air = new Air();
const pupuk = new Pupuk();
const list_tanaman = [
    new Tanaman("Tomat"),
    new Tanaman("Cabai"),
    new Tanaman("Jagung")
];


function tampilan() {
    kebun.innerHTML = "";
    list_tanaman.forEach((tanaman, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${tanaman.nama}</h3>
            <p>${tanaman.status()}</p>
            <button onclick="siramin(${index})">Siram</button>
            <button onclick="pupukin(${index})">Pupuk</button>
            <button onclick="matikan(${index})">Matikan</button>
        `;

        kebun.appendChild(div);
    });
}

function siramin(i) {
    air.siram(list_tanaman[i]);
    tampilan();
}

function pupukin(i) {
    pupuk.beri(list_tanaman[i]);
    tampilan();
}

function matikan(i) {
    list_tanaman[i].mati();
    tampilan();
}



tampilan()