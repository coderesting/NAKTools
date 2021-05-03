class AppCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="./components/appCard.css"/>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="${this.getAttribute("url")}"
				class="card"
				onClick="(e) => this.dispatchEvent(e)"
			>
				<h2>${this.getAttribute("title")}</h2>
				<span>${this.getAttribute("text")}</span>
				<img alt="img of ${this.getAttribute("title")}" src=${this.getAttribute(
			"img"
		)} />
			</a>
			
		`;
	}
}

customElements.define("app-card", AppCard);
