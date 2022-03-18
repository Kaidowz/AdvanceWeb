import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About Me");
    }

    async getHtml() {
        return `

<div class="about-section">
  <h1>About Page</h1>
  <p>All about the Creator.</p>
</div>

<h2 style="text-align:center">Creator</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Purpose of Website</h2>
        <p>The purpose for making the JavaScript/Single Page Application is to comply the requirement for Prelim exam.</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Rafael Osorio</h2>
        <p class="title">Student/Gamer</p>
        <p>Rafael Osorio is a student from La Salle University taking up Bachelor of Science in Information Technology.</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Favorite Online Games</h2>
        <p>Valorant</p>
        <p>CS:GO</p>
        <p>PUBG</p>
      </div>
    </div>
  </div>
</div>
        `;
    }
}