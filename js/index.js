import choo from 'choo'
import html from 'choo/html'

var app = choo()

app.route('/', mainPage)
app.route('/blog', blogPage)
app.mount('body')

function mainPage (state, emit) {
	return html`
		<body>
			${navView()}
			${indexView()}
			${footerView()}
    </body>
  `
}
function blogPage (state, emit) {
	return html`
		<body>
			${navView()}
			${blogView()}
			${footerView()}
    </body>
  `
}

const navView = (state, emit) => {
	return html`
		<div class="navigation">
			<div class="margin-auto mw-small h-100">
				<nav class="flex text-center align-center h-100">
					<div class="flex-child w-50">
						<a class="active" href="/">HOME</a>
					</div>
					<div class="flex-child w-50">
						<a href="/blog">BLOG</a>
					</div>
				</nav>
			</div>
		</div>
	`
}

const indexView = (state, emit) => {
	return html`
		<div class="main">
			<div class="flex align-center h-100">
				<div class="margin-auto avatar-container">
					<svg class="avatar" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M166.393 25.2191L25.1716 166.34C9.51032 148.687 0 125.454 0 100C0 44.7715 44.7715 0 100 0C125.48 0 148.734 9.52961 166.393 25.2191Z" fill="white"/>
						<path d="M174.492 33.2829L107.618 100.108L174.366 166.857C190.302 149.142 200 125.704 200 100C200 74.3638 190.353 50.9808 174.492 33.2829Z" fill="white"/>
						<path d="M166.253 174.905L99.5342 108.187L33.2298 174.444C50.934 190.334 74.3382 200 100 200C125.413 200 148.611 190.521 166.253 174.905Z" fill="white"/>
						</svg>
					<div class="mt-3 text-center">
						<h3>TECH+DESIGN</h3>
					</div>
				</div>
			</div>
		</div>
	`
}

const blogView = (state, emit) => {
	return html`
		<div class="main">
			<div class="flex align-center h-100">
				<div class="margin-auto avatar-container">
					<div class="mt-3 text-center">
						<h3>UNDER CONSTRUCTION</h3>
					</div>
				</div>
			</div>
		</div>
	`
}

// const blogView = (state, emit) => {
// 	return html`
// 		<div class="main">
// 			<div class="flex align-center h-100">
// 				<div class="mw-medium margin-auto avatar-container">
// 					<div class="flex no-wrap align-center">
// 						<div class="flex-child blog-list-text">
// 							<h4><a href="#">What is Lorem Ipsum?</a></h4>
// 							<h5 class="blog-list-text-desc mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </h5>
// 						</div>
// 						<div class="flex-child blog-list-image" style="background-image:url(https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547)">
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	`
// }

const footerView = (state, emit) => {
	return html`
		<div class="footer text-center">
			<div class="margin-auto mw-small">
				<div>
					<h5><a href="mailto:ra@evius.id">ra@evius.id</a></h5>
				</div>
				<div class="flex mt-2">
					<div class="flex-child w-third">
						<h5><a target="_blank" href="https://github.com/hdriqi">/github</a></h5>
					</div>
					<div class="flex-child w-third">
						<h5><a target="_blank" href="https://twitter.com/hdriqi">/twitter</a></h5>
					</div>
					<div class="flex-child w-third">
						<h5><a target="_blank" href="https://instagram.com/hdriqi">/instagram</a></h5>
					</div>
				</div>
				<div class="mt-2 mb-3">
					<h5>(c) Rahmat Albariqi;</h5>
				</div>
			</div>
		</div>
	`
}