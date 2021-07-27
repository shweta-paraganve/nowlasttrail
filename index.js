<script type="text/javascript">
function validateForm() {
if (isEmpty(document.getElementById('data_11').value.trim())) {
alert('Name is required!');
return false;
}
if (!validateEmail(document.getElementById('data_3').value.trim())) {
alert('Email must be a valid email address!');
return false;
}
if (isEmpty(document.getElementById('data_5').value.trim())) {
alert('Mobile no. is required!');
return false;
}
return true;
}
function isEmpty(str) { return (str.length === 0 || !str.trim()); }
function validateEmail(email) {
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
return isEmpty(email) || re.test(email);
}