* { box-sizing: border-box; }
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 15px;
}
.card {
    background: white;
    padding: 25px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 420px;
    text-align: center;
}
h2 { color: #25D366; margin-top: 0; }
label { display: block; text-align: right; margin-top: 10px; font-weight: bold; font-size: 14px; color: #333; }
input {
    width: 100%;
    padding: 12px;
    margin: 6px 0 12px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
}
button {
    background-color: #25D366;
    color: white;
    border: none;
    padding: 14px;
    width: 100%;
    border-radius: 8px;
    font-size: 17px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
}
button:hover { background-color: #1ebe5d; }
.lock-msg {
    color: #d9534f;
    background: #fdf7f7;
    border: 1px solid #f5c6cb;
    padding: 15px;
    border-radius: 8px;
    font-weight: bold;
    display: none;
    line-height: 1.5;
}
.badge {
    background: #e8f5e9;
    color: #2e7d32;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: bold;
}