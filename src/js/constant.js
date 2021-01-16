
export const views = {
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

export const sampleData = [
	{
		"second": 10,
		"text": "hi"
	},
	{
		"second": 10,
		"text": "welcome"
	},
	{
		"second": 8,
		"text": "hello"
	},
	{
		"second": 3,
		"text": "word"
	},
	{
		"second": 15,
		"text": "frontend"
	},
	{
		"second": 5,
		"text": "web"
	},
	{
		"second": 5,
		"text": "game"
	},
	{
		"second": 15,
		"text": "javascript"
	},
	{
		"second": 15,
		"text": "typescript"
	},
	{
		"second": 20,
		"text": "developers"
	},
	{
		"second": 15,
		"text": "thankyou"
	},
	{
		"second": 10,
		"text": "goodjob"
	}
];

export const url = 'https://my-json-server.typicode.com/kakaopay-fe/resources/words'
