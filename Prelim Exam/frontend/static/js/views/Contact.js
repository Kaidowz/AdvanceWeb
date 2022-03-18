import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        
            <h1>Contact Us</h1>
            <p>Have any question? We'd love to hear from you.</p>
            <br>
            <div class="container">
          
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name..">
              <br>
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name..">
              <br>
              <label for="city">City</label>
              <select id="city" name="city">
                <option value="ozamiz">Ozamiz</option>
                <option value="jimenez">Jimenez</option>
                <option value="tangub">Tangub</option>
                <option value="davao">Davao</option>
                <option value="pagadian">Pagadian</option>
              </select>
              <br>
              <label for="subject">Subject</label>
              <br>
              <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
              <br>
              <input type="submit" value="Submit" onclick="myFunction()">
          
          </div>
        `;
    }
}