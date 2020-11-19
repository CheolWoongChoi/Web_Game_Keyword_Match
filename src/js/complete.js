
const Complete = (function() {
	let commonInstance = null;

	let $score = null;
	let $avgTimeWrap = null;
	let $avgTime = null;
	let $button = null;

	function Complete() {
		this.setCommonInstance = common => commonInstance = common;

		this.setReady = () => {
			if (!history.state) {
				alert('게임을 정상적으로 시작하세요!');
				location.href = '/';
				return;
			}

			const { score, avgSubmitTime } = history.state

			$score = document.querySelector('.complete-container .score');
			$avgTimeWrap = document.querySelector('.complete-container .avg-time-wrap');
			$avgTime = document.querySelector('.complete-container .avg-time');
			$button = document.querySelector('.complete-container button');

			
			if (typeof(avgSubmitTime) === 'number') { 
				$avgTime.innerHTML = avgSubmitTime
			} else {
				$avgTimeWrap.innerHTML = '모든 문제를 틀려서 평균 답변 시간은 측정 불가합니다.';
			}

			$score.innerHTML = score;
			$button.addEventListener('click', this.restart);
		};

		this.restart = () => {
			$button.removeEventListener('click', this.restart);

			history.pushState(null, null, '/');
			commonInstance.renderPageView();
		}
	};

	return Complete;
})();

export default Complete;