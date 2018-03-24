var input_data = () => {

    let rows = "";
    const name = document.getElementById("name").value;
    const roll = document.getElementById("rollno").value;
    const year = document.getElementById("year").value;
    const stream = document.getElementById("stream").value;
    if( roll == null || /[^0-9]/.test(roll)){
        alert("Enter correct roll number");
        document.getElementById("rollno").value = "";
        return;
    }
    else if(name == null || /[^a-zA-Z]/.test(name)){
                alert("Enter correct Name");
                document.getElementById("name").value = "";
                return;
        }
    else if(year == null || /[^0-9]/.test(year)){
                alert("Enter correct Year");
                document.getElementById("year").value = "";
                return;
    }
    else if(stream == null || /[^a-zA-Z]/.test(stream)){
                alert("Enter correct Stream");
                document.getElementById("stream").value = "";
                return;
    }
    if(name != null && name.trim() !== '' && roll != null && roll.trim() !== '' && year != null && year.trim() !== '' && stream != null && stream.trim() !== '')
    {
        rows += `<tr><td><input class="check" type="checkbox" /><td>${roll}</td><td>${name}</td><td>${year}</td><td>${stream}</td></tr>`;
        $(rows).appendTo("#list tbody");
    }
    else alert("Cannot leave empty");

    document.getElementById("rollno").value = "";
    document.getElementById("name").value = "";
    document.getElementById("year").value = "";
    document.getElementById("stream").value = "";
}

var deleteRow =() => {
    let t=document.getElementById("tableid");
    let n=t.getElementsByClassName("check");
    for(let i=0;i<=n.length;i++)
        {
            if(n[i].checked)
            {
                tableid.deleteRow(i);
                i--;
                n.length--;
            }
        }
}

var edit = () => {
    const roll = prompt("Enter the roll number you want to edit");
    const rows = document.getElementsByTagName('tr');
    let j = 0;
    for (let i of rows) {
        if (i.children[1].innerHTML == roll) {
            const n = prompt("Enter new name");
            const o = prompt("Enter new passout year");
            const q = prompt("Enter new stream");

            if(o == null && o.trim( )== '' && q == null && q.trim() == '')
            {
                return;
            }
            i.children[2].innerHTML = n;
            i.children[3].innerHTML = o;
            i.children[4].innerHTML = q;
            return;
        }
        j++;
    }
    if (j == rows.length) {
        alert("No such rollno");
        return;
    }
}