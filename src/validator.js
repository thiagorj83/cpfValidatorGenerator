//creator thiago silva 12/2022


export class cpfValidator{
    
    allAreEqual(array) {
        this.array = array
        const result = array.every(element => {
            if (element === array[0]) {
                return true;
            }
        });

        return result;
    }

    isvalid(cpf) {

        this.cpf = cpf
        let chars = []
        let finalArray = []
        if (cpf.length === 11) {
            chars = cpf.split('')
            chars.forEach((item, index, arr) => {
                if (!isNaN(parseInt(item))) {
                    finalArray.push(item)
                }
            });
        } else if ((cpf.length === 14) && (cpf.match("^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$"))) {
            chars = this.cpf.split('')
            chars.forEach((item, index, arr) => {
                if (!isNaN(parseInt(item))) {
                    finalArray.push(item)
                }
            });
        }

        invalid = this.allAreEqual(finalArray)
        if (invalid === false) {
            let aux_array1 = []
            for (var k = 10; k > 0; k--) {
                aux_array1.push(k)
            }

            let sum1 = 0
            for (let m1 = 0; m1 <= aux_array1.length - 2; m1++) {
                sum1 = sum1 + (parseInt(finalArray[m1]) * aux_array1[m1])
            }
            let expected_digit1 = (sum1 * 10 % 11) % 10
            let aux_array2 = []
            for (var k = 11; k > 0; k--) {
                aux_array2.push(k)
            }
            let sum2 = 0
            for (let m2 = 0; m2 <= aux_array1.length - 1; m2++) {
                sum2 = sum2 + (parseInt(finalArray[m2]) * aux_array2[m2])
            }
            let expected_digit2 = (sum2 * 10 % 11) % 10
            if ((finalArray[9] == expected_digit1) && (finalArray[10] == expected_digit2)) {
                
                return 'Válido!'
            } else {
                
                return 'Inválido!'
            }

        } else {
            
            return 'Inválido!'
        }
    }

}
