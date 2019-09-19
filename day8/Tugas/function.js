let tampung = [{
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
const pekerjaan = ['pengangguran', 'CEO', 'Direktur']

let hasil = tampung.map(data => {
    return (`<tr>
        <td>${data.nama}</td>
        <td>${data.umur}</td>
        <td>${data.job}</td>
        <td><input type='button' value="Hapus" onclick="hapus(${data.id})">
    </tr>`)
})
document.getElementById('here').innerHTML = hasil.join('')
let hasilPekerjaan = pekerjaan.map(job=>{
    return`<option>${job}</option>`
})
document.getElementById('job').innerHTML = hasilPekerjaan.join('')


const hapus = (ab) =>{
    for(let i = 0 ; i<tampung.length ; i++){
        if(tampung[i].id == ab ){
            tampung.splice(i,1)
            if(pekerjaan.includes(tampung[i].job)){
                pekerjaan.splice(i,1)
            }
        }
    }
    console.log(pekerjaan)
    let hasil = tampung.map(data => {
        return (`<tr>
            <td>${data.nama}</td>
            <td>${data.umur}</td>
            <td>${data.job}</td>
            <td><input type='button' value="Hapus" onclick="hapus(${data.id})">
        </tr>`)
    })
    let hasilPekerjaan = pekerjaan.map(job=>{
        return`<option>${job}</option>`
    })
    document.getElementById('here').innerHTML = hasil.join('')
    document.getElementById('job').innerHTML = hasilPekerjaan.join('')
}

const funInputData = () => {
    let id = tampung[tampung.length - 1].id++
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let job = document.getElementById('jobInput').value
    tampung.push({
        nama,
        umur,
        job,
        id
    })
    hasil = tampung.map(data => {
        if (pekerjaan.includes(data.job) == false) {
            pekerjaan.push(data.job)
        }
        return `<tr>
            <td>${data.nama}</td>
            <td>${data.umur}</td>
            <td>${data.job}</td>
            <td><input type="button" value="Hapus" onclick="hapus(${data.id})"></input>
        </tr>`
    })
    let hasilPekerjaan = pekerjaan.map(dataPekerjaan => {
        return `<option>${dataPekerjaan}</option>`
    })
    document.getElementById('here').innerHTML = hasil.join('')
    document.getElementById('job').innerHTML = hasilPekerjaan.join('')
    console.log(tampung)
}

const funFilterName = () => {
    let input = document.getElementById("search").value
    let filter = input.toUpperCase();
    let hasil = tampung.map(data => {
        if (data.nama.toUpperCase().includes(filter)) {
            return `<tr>
            <td>${data.nama}</td>
            <td>${data.umur}</td>
            <td>${data.job}</td>
            <td><input type="button" onclick="hapus(${data.id})">Delete</input>
        </tr>`
        }
    })
    document.getElementById('here').innerHTML = hasil.join('')
}
const funFilterUmur = () => {
    let range1 = document.getElementById('num1').value
    let range2 = document.getElementById('num2').value
    let hasil = tampung.map(data => {
        if (data.umur >= range1 && data.umur <= range2) {
            return `<tr>
            <td>${data.nama}</td>
            <td>${data.umur}</td>
            <td>${data.job}</td>
            <td><input type="button" onclick="hapus(${data.id})">Delete</input>
        </tr>`
        }
    })
    if (range2 == '' || range1 == '') {
        hasil = tampung.map(data => {
            return `<tr>
                <td>${data.nama}</td>
                <td>${data.umur}</td>
                <td>${data.job}</td>
                <td><input type="button" onclick="hapus(${data.id})">Delete</input>
            </tr>`
        })
        document.getElementById('here').innerHTML = hasil.join('')
    } else {
        document.getElementById('here').innerHTML = hasil.join('')
    }
}

const funFilterJob = () => {
    let filter = document.getElementById('job').value
    console.log(filter)
    let hasil = tampung.map(data => {
        if (data.job == filter) {
            return `<tr>
            <td>${data.nama}</td>
            <td>${data.umur}</td>
            <td>${data.job}</td>
            <td><input type="button" value="hapus" onclick="hapus(${data.id})"></input>
        </tr>`
        }
    })
    document.getElementById('here').innerHTML = hasil.join('')

}

// let data = [
// 	{
// 		id: 1,
// 		nama: 'jon',
// 		umur: '10',
// 		pekerjaan: 'Petani'
// 	},
// 	{
// 		id: 2,
// 		nama: 'joni',
// 		umur: '11',
// 		pekerjaan: 'lari'
// 	},
// 	{
// 		id: 3,
// 		nama: 'boni',
// 		umur: '41',
// 		pekerjaan: 'pelajar'
// 	}
// ];

// let pekerjaandata = [ 'Petani', 'lari', 'pelajar' ];

// PekerjaanOption = pekerjaandata.map((x) => {
// 	return '<option>' + x + '</option>';
// });

// document.getElementById('job').innerHTML = PekerjaanOption;

// hasil = data.map((x) => {
// 	return (
// 		'<tr><td>' +
// 		x.nama +
// 		'</td><td>' +
// 		x.umur +
// 		'</td><td>' +
// 		x.pekerjaan +
// 		'</td><td><button onclick="hapus(' +
// 		x.id +
// 		')">hapus</button></td></tr>'
// 	);
// });

// document.getElementById('here').innerHTML = hasil.join('');

// let funInputData = () => {
// 	let nama = document.getElementById('nama').value;
// 	let umur = document.getElementById('umur').value;
// 	let pekerjaan = document.getElementById('jobInput').value;
// 	let id = data[data.length - 1].id + 1;
// 	data.push({
// 		id,
// 		nama,
// 		umur,
// 		pekerjaan
// 	});
// 	hasil = data.map((x) => {
// 		return (
// 			'<tr><td>' +
// 			x.nama +
// 			'</td><td>' +
// 			x.umur +
// 			'</td><td>' +
// 			x.pekerjaan +
// 			'</td><td><button onclick="hapus(' +
// 			x.id +
// 			')">hapus</button></td></tr>'
// 		);
// 	});
// 	document.getElementById('here').innerHTML = hasil.join('');
// 	if (pekerjaandata.includes(pekerjaan) == false) {
// 		pekerjaandata.push(pekerjaan);
// 	}
// 	PekerjaanOption = pekerjaandata.map((x) => {
// 		return '<option>' + x + '</option>';
// 	});
// 	console.log(data);
// 	document.getElementById('job').innerHTML = PekerjaanOption;
// };

// function funFilterName() {
// 	input = document.getElementById('search').value.toUpperCase();
// 	console.log(input);
// 	hasil = data.map((x) => {
// 		if (x.nama.toUpperCase().indexOf(input) > -1)
// 			return (
// 				'<tr><td>' +
// 				x.nama +
// 				'</td><td>' +
// 				x.umur +
// 				'</td><td>' +
// 				x.pekerjaan +
// 				'</td><td><button onclick="hapus(' +
// 				x.id +
// 				')">hapus</button></td></tr>'
// 			);
// 	});
// 	document.getElementById('here').innerHTML = hasil.join('');
// }
// function funFilterUmur() {
// 	input1 = document.getElementById('num1').value;

// 	input2 = document.getElementById('num2').value;
// 	console.log(input1);
// 	hasil = data.map((x) => {
// 		if (input1 <= x.umur && input2 >= x.umur)
// 			return (
// 				'<tr><td>' +
// 				x.nama +
// 				'</td><td>' +
// 				x.umur +
// 				'</td><td>' +
// 				x.pekerjaan +
// 				'</td><td><button onclick="hapus(' +
// 				x.id +
// 				')">hapus</button></td></tr>'
// 			);
// 	});
// 	if (input2 == '' || input1 == '') {
// 		hasil = data.map((x) => {
// 			return (
// 				'<tr><td>' +
// 				x.nama +
// 				'</td><td>' +
// 				x.umur +
// 				'</td><td>' +
// 				x.pekerjaan +
// 				'</td><td><button onclick="hapus(' +
// 				x.id +
// 				')">hapus</button></td></tr>'
// 			);
// 		});
// 		document.getElementById('here').innerHTML = hasil.join('');
// 	} else {
// 		document.getElementById('here').innerHTML = hasil.join('');
// 	}
// }
// function funFilterJob() {
// 	input = document.getElementById('job').value;

// 	hasil = data.map((x) => {
// 		if (input == x.pekerjaan)
// 			return (
// 				'<tr><td>' +
// 				x.nama +
// 				'</td><td>' +
// 				x.umur +
// 				'</td><td>' +
// 				x.pekerjaan +
// 				'</td><td><button onclick="hapus(' +
// 				x.id +
// 				')">hapus</button></td></tr>'
// 			);
// 	});
// 	document.getElementById('here').innerHTML = hasil.join('');
// }

// function hapus(idnya) {
// 	for (i = 0; i < data.length; i++) {
// 		if (data[i].id == idnya) {
// 			data.splice(i, 1);
// 		}
// 	}

// 	hasil = data.map((x) => {
// 		return (
// 			'<tr><td>' +
// 			x.nama +
// 			'</td><td>' +
// 			x.umur +
// 			'</td><td>' +
// 			x.pekerjaan +
// 			'</td><td><button onclick="hapus(' +
// 			x.id +
// 			')">hapus</button></td></tr>'
// 		);
// 	});
// 	document.getElementById('here').innerHTML = hasil.join('');
// }

document.getElementById('id').innerHTML = 's'