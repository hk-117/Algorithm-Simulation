async function bubbleSort() {
    let num = Number(document.forms["inputForm"]["arraylen"].value);
    if(num<=0)
        alert("Enter a valid length!");
    const array = [];
    for (let i = 0; i < num; i++) {
      array.push(Math.floor(Math.random() * 100));
    }

    const arrayDiv = document.getElementById("array");
    arrayDiv.innerHTML="";
    for (let i = 0; i < array.length; i++) {
      const numDiv = document.createElement("div");
      numDiv.classList.add("num");
      numDiv.style.height = array[i] + "px";
      arrayDiv.appendChild(numDiv);
    }
    const nums = document.querySelectorAll(".num");
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
          nums[j].classList.add("current");
          nums[j + 1].classList.add("current");
          await new Promise(resolve => setTimeout(resolve, 150));
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            nums[j].style.height = array[j] + "px";
            nums[j + 1].style.height = array[j + 1] + "px";
          }
          nums[j].classList.remove("current");
          nums[j + 1].classList.remove("current");
        }
        nums[nums.length - i - 1].classList.add("sorted");
    }
    nums[0].classList.add("sorted");
}

async function clearScreen(){
    const arrayDiv = document.getElementById("array");
    while(arrayDiv.hasChildNodes()){
        arrayDiv.removeChild(arrayDiv.firstChild);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}
