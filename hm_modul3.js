// Zadanie 1: Tworzenie Tablic
// Utwórz tablicę o nazwie fruits, zawierającą następujące owoce: "Jabłko", "Banan", "Pomarańcza", "Winogrona" i "Arbuz".

const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];
for (let i = 0; i < fruits.length; i += 1) {
    console.log(fruits[i])
}

// Zadanie 2: Iteracja po Tablicach
// Napisz pętlę, która będzie iterować po tablicy numbers i wyświetlać tylko te liczby, które są większe niż 5.

const numbers = [1,2,3,4,5,6,7,8,9,10];
const findNumber = 5;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > findNumber) 
   
    console.log(`Liczby większe niż ${findNumber} z tablicy ${numbers} to: ${numbers[i]}`)
}

