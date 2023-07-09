

function getInputValue () {
    const arrList = document.getElementById('input-value').value.split(',');
    const newArr = arrList.map((fullname) => fullname.toLowerCase().trim())
    const sortedArray = newArr.sort((a, b) => {
        const lastNameA = a.split(' ')[a.split(' ').length - 1];
        const lastNameB = b.split(' ')[b.split(' ').length - 1];
        return lastNameA.localeCompare(lastNameB);
      });
      console.log('sortedArray', sortedArray);

      document.getElementById('display').innerHTML = sortedArray.toString()
}
