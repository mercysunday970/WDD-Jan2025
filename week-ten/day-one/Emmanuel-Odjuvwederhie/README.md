<h1> WHAT ASYNCHRONOUS CODE MEANS IN JAVASCRIPT</h1>
<p> Asynchronous code is Javascript allows the program to executes tasks without blocking the main thread. This means that Javascript can continue running other code while waiting for time-consuming operations (Like API requests or file loading) to complete. It improves performance and responsiveness, especially in web applications.

<h2>HOW AND WHY WE USE fetch()</h2>
<p>The fetch() function is used to make network requests (like getting data from an API). It returns a <b>Promise</b> that resolves with the <b>Response</b> object representing the result of the request.
<p>WHY WE USE IT?</p>
<ol>
<div>To retrieve data from serves without refreshing the page</div>
<div>To post data to a server</div>
<div>To work with RESTful APIs in a simple, readable way</div>
</ol>

<h3>WHAT async/await DO AND HOW THEY WORK?</h3>
<ol>
<div><b>async</b> is a keyword used to declare a function that always return a <b>Promise</b></div>
<div><b>await</b> is used inside an <b>async</b> function to pause execution until a <b>Promise</b> is resolved.</div>
They provide a clearer, more readable way to work with asynchronous code, compared to chaining <b>.then()</b>

AN EXAMPLE:
async function fetchUser() {
    const response = await fetch('https://api.example.com/data');
    const user =await res.json();
    console.log('User Name: ${user.name}');
}
fetchUser();
