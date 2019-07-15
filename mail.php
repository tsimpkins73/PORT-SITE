<?php
if($_POST["message"]) {
    mail("t73designs@yahoo.com", "Form to email message", $_POST[Name: "#firstName" "#lastName" + Company: "#company" + "message"], "From: an@email.address");
}
?>