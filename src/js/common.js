
const Common = (function () {
	const pageViews = {
		game: `
			<div class='game-container'>
				<div class='top-wrap'>
					<div class='time-wrap'>
						남은 시간: <span class='time'>???</span>초
					</div>
					<div class='score-wrap'>
						점수: <span class='score'>???</span>점
					</div>
				</div>
				<div class='word-wrap'>
					<span class='word'>문제 단어</span>
				</div>
				<div class='input-wrap'>
					<input type='text' />
				</div>
				<div class='btn-wrap'>
					<button>시작</button>
				</div>
			</div>
		`,
		complete: `
			<div class='complete-container'>
				<div class='top-wrap'>
					Mission Complete!
				</div>
				<div class='score-wrap'>
					당신의 점수는 <span class='score'></span>점입니다.
				</div>
				<div class='avg-time-wrap'>
					단어당 평균 답변 시간은 <span class='avg-time'></span>초입니다.
				</div>
				<div class='btn-wrap'>
					<button>다시 시작</button>
				</div>
			</div>
		`,
		fallback: `
			<div class='fallback-container'>
				<div class='msg-wrap'>
					잘못된 경로입니다.
				</div>
				<div class='btn-wrap'>
					<button>홈으로 이동</button>
				</div>
			</div>
		`
	};
	
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