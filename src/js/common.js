import { views } from '../js/constant';

const Common = (function () {
	const pageViews = views;
	let pageInstances = null;

	function Common() {
		this.renderPageView = () => {
			const path = location.pathname;
			const [ game, complete ] = pageInstances;

			if (path === '/') {
				this.renderView(pageViews.game);
				game.setReady();
			} else if (path === '/complete') {
				this.renderView(pageViews.complete);
				complete.setReady();
			} else {
				this.renderView(pageViews.fallback);
				this.fallbackViewSetReady();
			}
		}

		this.setReady = (...params) => {
			pageInstances = [...params];

			document.addEventListener('DOMContentLoaded', () => {
				this.renderPageView();
			});

			window.onpopstate = () => {
				alert('게임을 정상적으로 시작하세요!');
				location.href = '/';
			}
		}

		this.getPageInstances = () => pageInstances;

		this.fallbackViewSetReady = () => {
			const $button = document.querySelector('.fallback-container button');
			
			$button.addEventListener('click', () => {
				history.pushState(null, null, '/');
				this.renderPageView();
			});
		}
	};

	Common.prototype.renderView = view => {
		const parser = new DOMParser();
		const domString = view;

		const $newDOM = parser.parseFromString(domString, 'text/html');	
		const $container = document.querySelector('#container');
		const $view = $newDOM.body.firstChild;

		while ($container.hasChildNodes()) {
			$container.removeChild($container.firstChild);
		}

		$container.appendChild($view);
	}

	return Common;
})();

export default Common;