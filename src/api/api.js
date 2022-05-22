import axios from "axios"

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "api-key": `52fc5f00-bfda-409d-be57-68b4b2bb3d1f`,
}


export const createContact = async data => {
  var xhr = new XMLHttpRequest();
  var url = "https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/ashr9fp20@gmail.com?hapikey=52fc5f00-bfda-409d-be57-68b4b2bb3d1f";

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Missing", xhr.response)
      alert(xhr.responseText); // Returns a 200 response if the submission is successful.
    } else if (xhr.readyState === 4 && xhr.status === 403) {
      alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.     
    } else if (xhr.readyState === 4 && xhr.status === 404) {
      alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
    }
    if (xhr.readyState == XMLHttpRequest.DONE) {
      alert(xhr.responseText);
    }
  }

  xhr.responseType = 'json';
  xhr.open('POST', url);
  // 4. This will be called after the response is received
  xhr.onload = function () {
    if (xhr.status != 200) { // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
    }
  };
  return 1;
}
