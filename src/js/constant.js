
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

export const url = 'https://my-json-server.typicode.com/kakaopay-fe/resources/words'

export const sampleData = [
	{
		"second": 10,
		"text": "hello"
	},
	{
		"second": 10,
		"text": "world"
	},
	{
		"second": 8,
		"text": "this"
	},
	{
		"second": 3,
		"text": "is"
	},
	{
		"second": 15,
		"text": "kakaopay"
	},
	{
		"second": 5,
		"text": "we"
	},
	{
		"second": 5,
		"text": "are"
	},
	{
		"second": 15,
		"text": "kakaopay"
	},
	{
		"second": 15,
		"text": "frontend"
	},
	{
		"second": 20,
		"text": "developers"
	},
	{
		"second": 15,
		"text": "join"
	},
	{
		"second": 10,
		"text": "us"
	}
];