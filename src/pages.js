import React from "react";
import { Header, Footer } from "./pages/sitewide";
import { HomeMain } from "./pages/home";
import { ResumeMain } from "./pages/resume";
import { ReadingListMain } from "./pages/reading-list";
import { ContactMain } from "./pages/contact";
import $ from "jquery";

export function Home() {
    return (
        <div>
            <Header />
            <HomeMain />  
            <Footer />
        </div>
    );
}

export function Resume() {
    return (
        <div>
            <Header />
            <ResumeMain />
            <Footer />
        </div>
    );
}

export function ReadingList() {
    return (
        <div>
            <Header />
            <ReadingListMain />
            <Footer />
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <Header />
            <ContactMain />            
            <Footer />
            <script
                src="https://code.jquery.com/jquery-3.4.1.min.js"
                integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                crossorigin="anonymous"></script>        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <script>
                {
                    function submitToAPI(e) {
                        e.preventDefault();                    
                        var Namere = /[A-Za-z]{1}[A-Za-z]/;
                        if (!Namere.test(document.getElementById("#name-input").value)) {
                            alert ("Name can not less than 2 char");
                            return;
                        }
                        if (document.getElementById("#email-input").value === "") {
                            alert ("Please enter your email id");
                            return;
                        }
                    
                        var reeamil = /^([\w-]+@([\w-]+\.)+[\w-]{2,6})?$/;
                        if (!reeamil.test(document.getElementById("#email-input").value)) {
                            alert ("Please enter valid email address");
                            return;
                        }
                    
                        var name = document.getElementById("#name-input").value;
                        var phone = document.getElementById("#phone-input").value;
                        var email = document.getElementById("#email-input").value;
                        var desc = document.getElementById("#description-input").value;
                        var data = {
                            name : name,
                            phone : phone,
                            email : email,
                            desc : desc
                        };

                        const xhttp = new XMLHttpRequest();
                        xhttp.onload = function() {
                            alert("Successfull");
                            document.getElementById("contact-form").reset();
                            window.location.reload();
                        }
                        xhttp.open("POST", "https://1950ggwx8e.execute-api.us-east-1.amazonaws.com/Prod/contact-us");
                        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhttp.send("data=" + JSON.stringify(data));
                    }
                }
            </script>
        </div>
    );
}