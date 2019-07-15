<?php
if($_POST["message"]) {
    mail("t73designs@yahoo.com", "Form to email message", $_POST["message"], "From: Portfolio Site");
}
?>