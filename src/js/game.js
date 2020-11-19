
const Game = (function () {
	const url = 'https://my-json-server.typicode.com/kakaopay-fe/resources/words'

	let httpRequest = null; 
	let commonInstance = null;

	let $time = null;
	let $score = null;
	let $word = null;
	let $input = null;
	let $button = null;
	
	let words = null;
	let timerId = null;
	let currentWord = null;
	let currentWordIdx = 0;
	let currentWordTime = 0;
	let score = 0;
	let avgSubmitTime = null;
	let wordsSubmitTime = [];

	function Game() {
		this.getData = () => {
			httpRequest = new XMLHttpRequest();

			try {	
				httpRequest.onreadystatechange = function () {
					if (httpRequest.readyState === XMLHttpRequest.DONE) {
						if (httpRequest.status === 200) {
							words = JSON.parse(httpRequest.responseText);
						} else {
							alert('[ERROR] 데이터를 가져오는 데 실패했습니다.')
						}
					}
				}
			} catch(e) {
				alert(`[ERROR] 예외발생: ${e.description}`);
			}

			httpRequest.open('GET', url);
			httpRequest.send();
		}

		this.setCommonInstance = common => commonInstance = common;

		this.setEvent = (callback) => {
			$button = document.querySelector('#container .game-container button');
			
			$button.addEventListener('click', () =>	{
				callback();
			});
		};

		this.setReady = () => {
			$time = document.querySelector('.game-container .time');
			$score = document.querySelector('.game-container .score');
			$word = document.querySelector('.game-container .word');
			$input = document.querySelector('.game-container input');
			$button = document.querySelector('.game-container button');
			
			$button.addEventListener('click', this.start);
			this.getData();
		};

		this.showWord = () => {
			let { second, text } = words[currentWordIdx];

			currentWord = text;
			currentWordTime = second;
			
			$time.innerHTML = second;
			$score.innerHTML = score;
			$word.innerHTML = text;
			$input.value = '';

			if (!timerId) {
				timerId = setInterval(() => {
					if (second < 0) {
						clearInterval(timerId);
						timerId = null;

						currentWordIdx++;						
						$score.innerHTML = --score;

						if (currentWordIdx === words.length) {
							return this.handleLastWord();
						} else {
							return this.showWord();
						}
					}
			
					$time.innerHTML = second--;
				}, 1000);
			}
		};

		this.handleLastWord = () => {
			if (wordsSubmitTime.length) {
				avgSubmitTime = wordsSubmitTime.reduce((sum, i) => sum + i, 0) / wordsSubmitTime.length;
				avgSubmitTime = +avgSubmitTime.toFixed(5);
			} else {
				avgSubmitTime = false;
			}

			history.pushState({ score, avgSubmitTime }, null, '/complete');
			commonInstance.renderPageView();
		}

		this.handleInput = e => {
			if (e.keyCode === 13) {
				if ($input.value === currentWord) {
					wordsSubmitTime.push(currentWordTime - $time.innerHTML);
					score++; 
				} else {
					score--;
				}

				clearInterval(timerId);
				timerId = null;
				currentWordIdx++;

				if (currentWordIdx === words.length) {
					this.handleLastWord();
				} else {
					this.showWord();	
				}
			}
		};

		this.start = () => {
			$button.removeEventListener('click', this.start);
			$button.addEventListener('click', this.reset);
			$input.addEventListener('keydown', this.handleInput);
			$button.innerHTML = '초기화';
			
			currentWordIdx = 0;
			wordsSubmitTime = [];
			score = 0;
			this.showWord();
		};

		this.reset = () => {
			$button.removeEventListener('click', this.reset);
			$button.addEventListener('click', this.start);
			$input.removeEventListener('keydown', this.handleInput);

			clearInterval(timerId);
			timerId = null;
			
			$time.innerHTML = '???';
			$score.innerHTML = '???';
			$word.innerHTML = '문제 단어';
			$input.value = '';
			$button.innerHTML = '시작';
		};
	};

	return Game;
})();

export default Game;