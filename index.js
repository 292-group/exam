let index = 1;

    const data = ['Start', 'In progress', 'Pause', 'Disconnect', 'Finish']
    const colors = ['#5db85c', '#4BA8F1', '#f0ad4e', '#d9534f', '#CA5BED']

    document.getElementById("btn").addEventListener('click', function onClick() {
        console.log("function")
        btn.style.backgroundColor = colors[index];
        btn.innerHTML = data[index]

        index = index >= colors.length - 1 ? 0 : index + 1;
    });