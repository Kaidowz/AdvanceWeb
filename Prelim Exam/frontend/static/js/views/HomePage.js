import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home Page");
    }
    async getHtml() {
        return `
        <div class="headercss">
            <h1>Welcome to Single-Page Application</h1>
        </div>
        <br>
            <p>
                What is Single Page App?
            </p>
            <p>
            According to Mozilla "An SPA (Single-page application) is a web app implementation that loads only a single web document,
            and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content
            is to be shown.
            </p>
            <p>
            This therefore allows users to use websites without loading whole new pages from the server,
            which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO,
            more effort required to maintain state, implement navigation, and do meaningful performance monitoring."</p>
            </p>
            <br>
            <br>
            <div class="row">
              <div class="column">
                <div class="card">
                  <div class="container">
                    <h2>Advantages of Single-page Apps</h2>
                    <p class="title">By Gaurav Singhal (Apr 9, 2020)</p>
                    <p>
                    An important feature of single-page applications is performance. They get a performance boost by loading
                    HTML, CSS, and JavaScript resources as soon as the website is loaded.
                    </p>
                    <p>
                    The reason is that when users come to an application, they need the shortest possible wait time so that they can do their work and leave.
                    The performance reflects the demand for the application.
                    </p>
                  </div>
                </div>
              </div>
            
              <div class="column">
                <div class="card">
                  <div class="container">
                    <h2>Disadvantages of Single-page Apps</h2>
                    <p class="title">By Gaurav Singhal (Apr 9, 2020)</p>
                    <p>There are also some disadvantages to using single-page apps:</p>
                    <p>- Single-page apps use JavaScript, so it can be difficult to trace errors.</p>
                    <p>- Users need to turn on JavaScript in their web browser or the application wont work.</p>
                    <p>- Memory leaks may result in a performance dro.</p>
                    <p>- Single-page apps are not suitable for enterprise-based applications, only for small and mid-size applications.</p>
                    <p>- They have terrible maintainability due to using third-party plug-ins.</p>
                  </div>
                </div>
              </div>
            
              <div class="column">
                <div class="card">
                  <div class="container">
                    <h2>Conclusion</h2>
                    <p class="title">By Gaurav Singhal (Apr 9, 2020)</p>
                    <p>
                    There are certain advantages and disadvantages of single-page and multi-page applications,
                    and knowing them can help you choose the right type of application for your project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        `;
    }
}