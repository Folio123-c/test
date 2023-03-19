onst token = JSON.parse(localStorage.getItem('token'));

fetch("https://mybrand-faustin.cyclic.app/api/v1/blogs", {
    headers: {
        "Authorization": token
    }
})
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        // console.log(data.data);
        const allblogs = data.data;
        document.getElementById('pub').textContent = allblogs.length;});
fetch("https://mybrand-faustin.cyclic.app/api/v1/draft", {
    headers: {
        "Authorization": token
    }
})
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        // console.log(data.data);
        const allblogs = data.data;
        document.getElementById('draf').textContent = allblogs.length;});
fetch("https://mybrand-faustin.cyclic.app/api/v1/draft", {
    headers: {
        "Authorization": token
    }
})
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        // console.log(data.data);
        const allblogs = data.data;
        document.getElementById('drafs').textContent = allblogs.length;});
fetch("https://mybrand-faustin.cyclic.app/api/v1/message", {
    headers: {
        "Authorization": token
    }
})
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        // console.log(data.data);
        const allblogs = data.data;
        document.getElementById('messa').textContent = allblogs.length;});