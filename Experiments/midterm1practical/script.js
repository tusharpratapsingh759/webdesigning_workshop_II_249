 
        function checkNumber() {
            let num = document.getElementById("numInput").value;
            num = Number(num);

            // Check even or odd
            if (num % 2 === 0) {
                document.getElementById("result").innerText = "Even Number";
            } else {
                document.getElementById("result").innerText = "Odd Number";
            }

            // Print numbers from 1 to num
            let output = "";
            for (let i = 1; i <= num; i++) {
                output += i + " ";
            }

            document.getElementById("numbers").innerText = output;
        }
    