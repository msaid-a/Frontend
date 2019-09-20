const tampung = [{
        id: 1,
        nama: 'said',
        umur: '18',
        job: 'pengangguran'
    },
    {
        id: 2,
        nama: 'ujang',
        umur: '20',
        job: 'CEO'
    },
    {
        id: 3,
        nama: 'asep',
        umur: '25',
        job: 'Direktur'
    }
]
// Tampil Tabel
const pekerjaan = ['pengangguran', 'CEO', 'Direktur']
const tampilTable = (tampung) => {
    let hasil = tampung.map(data => {
        return (`<tr>
            <td>${data.nama}</td>
            <td>${data.umur}</td>
            <td>${data.job}</td>
            <td><input type='button' value="Hapus" onclick="hapus(${data.id})">
        </tr>`)
    })
    document.getElementById('here').innerHTML = hasil.join('')
}
tampilTable(tampung)

// tampil Jobs
const tampilPekerjaan = (pekerjaan) => {
    let dup = [...new Set(pekerjaan)]
    let hasilPekerjaan = dup.map(job => {
        return `<option>${job}</option>`
    })
    document.getElementById('job').innerHTML = hasilPekerjaan.join('')
}
tampilPekerjaan(pekerjaan)

const hapus = (ab) => {
    for (let i = 0; i < tampung.length; i++) {
        console.log(i)
        if (ab == tampung[i].id) {
            tampung.splice(i, 1)
            if (pekerjaan.includes(tampung[i].job)) {
                pekerjaan.splice(i, 1)
            }
        }
        tampilPekerjaan(pekerjaan)
        tampilTable(tampung)
    }}
    console.log(tampung)

// Input
const funInputData = () => {
    let id = tampung.length+1
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let job = document.getElementById('jobInput').value
    tampung.push({
        nama,
        umur,
        job,
        id
    })
    tampilTable(tampung)
    tampilPekerjaan(pekerjaan)
}
console.log(tampung)

// Filter Nama
const funFilterName = () => {
    let input = document.getElementById("search").value.toLowerCase()
    let hasil = tampung.filter(function(array){return array.nama.toLowerCase().includes(input)})
    tampilTable(hasil)    
    }

// Filter Umur
const funFilterUmur = () => {
    let range1 = document.getElementById('num1').value
    let range2 = document.getElementById('num2').value
    let hasil = tampung.filter(function(array){return parseInt(array.umur) >= range1 && parseInt(array.umur) <= range2})
    if(range2 == 0){
        tampilTable(tampung)
    }else{
        tampilTable(hasil) 
    }

}

// Filter job
const funFilterJob = () => {
    let filter = document.getElementById('job').value
    console.log(filter)
    let hasil = tampung.filter(function(array){return array.job.includes(filter)})
    tampilTable(hasil)
}