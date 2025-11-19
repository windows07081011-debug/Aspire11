document.getElementById('regForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const res = await fetch('http://localhost:5000/register', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
    });
    if(res.ok){
        document.getElementById('regForm').style.display='none';
        document.getElementById('thanks').style.display='block';
    }
});
