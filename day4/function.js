const arrHuman = []
const input = () =>{
    let no = 1
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let kelamin = document.querySelectorAll('input[name=gender]:checked')[0].value
    // query selektor hanya akan mencari satu element jika sudah menemukan tidak akan mencari lagi
    //query selektor all mencari semua element
    let pekerjaan= document.getElementById('pekerjaan').value
    arrHuman.push({no,nama, umur, kelamin, pekerjaan})
    console.dir(arrHuman)
    
    //render list
    //manusia = {nama, umur, kelamin, pejeraan}
    let hasil = arrHuman.map(manusia=>{
        return (
            `
            <tr>
                <td>${no++}</td>
                <td>${manusia.nama}</td>
                <td>${manusia.umur}</td>
                <td>${manusia.kelamin}</td>
                <td>${manusia.pekerjaan}</td>
            </tr>
            `
        )
    })
    document.getElementById('list-manusia').innerHTML = hasil.join('')
}
const arrHewan = []
const inputHewan = ()=>{
    let no = 1
    let nama = document.getElementById('nama_hewan').value
    let umur = document.getElementById('umur_hewan').value
    let kelamin = document.querySelectorAll('input[name=gender_hewan]:checked')[0].value
    let status = document.querySelectorAll('input[name=status]:checked')[0].value
    arrHewan.push({no, nama, umur, kelamin, status})
    let hasil = arrHewan.map((hewan) => {
        return (`
        <tr>
            <td>${no++}</td>
            <td>${hewan.nama}</td>
            <td>${hewan.umur}</td>
            <td>${hewan.kelamin}</td>
            <td>${hewan.pekerjaan}</td>
        </tr>
        `)
    })
    document.getElementById('list-hewan').innerHTML = hasil.join('')
}