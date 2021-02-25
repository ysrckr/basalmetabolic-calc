const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const age = document.querySelector('#age')
const gender = document.querySelector('#gender')
const activity = document.querySelector('#activity')
const form = document.querySelector('#form')
const list = document.querySelector('.list')

const calcBMH = (correctedWeight, weightValue, BMI) => {
	let BMH
	switch (gender.value) {
		case 'Male':
			if (BMI >= 25) {
				if (age.value < 3) {
					BMH = 59.512 * correctedWeight - 30.4
					return BMH
				} else if (age.value >= 3 && age.value < 10) {
					BMH = 22.706 * correctedWeight + 504.3
					return BMH
				} else if (age.value >= 10 && age.value < 18) {
					BMH = 17.686 * correctedWeight + 658.2
					return BMH
				} else if (age.value >= 18 && age.value < 30) {
					BMH = 15.057 * correctedWeight + 692.2
					return BMH
				} else if (age.value >= 30 && age.value < 60) {
					BMH = 11.472 * correctedWeight + 873.1
					return BMH
				} else if (age.value >= 60) {
					BMH = 11.711 * correctedWeight + 587.7
					return BMH
				}
			} else {
				if (age.value < 3) {
					BMH = 59.512 * weight.value - 30.4
					return BMH
				} else if (age.value >= 3 && age.value < 10) {
					BMH = 22.706 * weight.value + 504.3
					return BMH
				} else if (age.value >= 10 && age.value < 18) {
					BMH = 17.686 * weight.value + 658.2
					return BMH
				} else if (age.value >= 18 && age.value < 30) {
					BMH = 15.057 * weight.value + 692.2
					return BMH
				} else if (age.value >= 30 && age.value < 60) {
					BMH = 11.472 * weight.value + 873.1
					return BMH
				} else if (age.value >= 60) {
					BMH = 11.711 * weight.value + 587.7
					return BMH
				}
			}
			break
		case 'Female':
			if (BMI >= 25) {
				if (age.value < 3) {
					BMH = 58.317 * correctedWeight - 31.1
					return BMH
				} else if (age.value >= 3 && age.value < 10) {
					BMH = 20.315 * correctedWeight + 485.9
					return BMH
				} else if (age.value >= 10 && age.value < 18) {
					BMH = 13.384 * correctedWeight + 692.6
					return BMH
				} else if (age.value >= 18 && age.value < 30) {
					BMH = 14.818 * correctedWeight + 486.6
					return BMH
				} else if (age.value >= 30 && age.value < 60) {
					BMH = 8.126 * correctedWeight + 845.6
					return BMH
				} else if (age.value >= 60) {
					BMH = 9.082 * correctedWeight + 658.5
					return BMH
				}
			} else {
				if (age.value < 3) {
					BMH = 58.317 * weight.value - 31.1
					return BMH
				} else if (age.value >= 3 && age.value < 10) {
					BMH = 20.315 * weight.value + 485.9
					return BMH
				} else if (age.value >= 10 && age.value < 18) {
					BMH = 13.384 * weight.value + 692.6
					return BMH
				} else if (age.value >= 18 && age.value < 30) {
					BMH = 14.818 * weight.value + 486.6
					return BMH
				} else if (age.value >= 30 && age.value < 60) {
					BMH = 8.126 * weight.value + 845.6
					return BMH
				} else if (age.value >= 60) {
					BMH = 9.082 * weight.value + 658.5
					return BMH
				}
			}
			break

		default:
			console.log('BMH hesaplanamadi')
	}
}

const calcEnergyNeed = (activityValue, BMH) => {
	let energyNeed
	switch (activityValue) {
		case 'Light Activity':
			energyNeed = BMH * 1.2
			return energyNeed
		case 'Normal Activity':
			energyNeed = BMH * 1.4
			return energyNeed
		case 'High Activity':
			energyNeed = BMH * 1.6
			return energyNeed
		default:
			return BMH
	}
}

form.addEventListener('submit', e => {
	e.preventDefault()
	const activityValue = activity.value
	const weightValue = weight.value
    const heightValue = (height.value)/100
	const BMI = weightValue / Math.pow(heightValue, 2)
	const idealBMI = 22
	const idealWeight = idealBMI * Math.pow(heightValue, 2)
	const correctedWeight = (weightValue - idealWeight) * 0.25 + idealWeight

    let HTML = `<li class='list-item'>Bazal Metabolizma Hizi: <span>${calcBMH(correctedWeight, weightValue, BMI).toPrecision(6)} kkal</span></li>
    <li class='list-item'>Enerji Ihtiyaci: <span>${calcEnergyNeed(activityValue, calcBMH(correctedWeight, weightValue, BMI)).toPrecision(6)} kkal</span></li>`

	
    list.innerHTML += HTML

})
