
import Common from '../js/common';
import Game from '../js/game';
import { sampleData } from '../js/constant';

describe('Game', () => {
	let commonInstance = null;
	let gameInstance = null;

	beforeAll(() => {
		commonInstance = new Common();
		gameInstance = new Game();
	});

	describe('getData', () => {
		it('서버로부터 하나 이상의 데이터를 전달받는다.', () => {
			gameInstance.getData().then(data => {
				expect(data.length).toBeGreaterThan(0);
			});
		});

		it('서버로부터 받은 데이터는 샘플 데이터와 일치해야 한다.', () => {
			gameInstance.getData().then(data => {
				expect(data).toEqual(sampleData);
			});
		})
	});

	describe('setCommonInstance', () => {
		it('game 인스턴스 내에 common 인스턴스를 저장해야 한다.', () => {
			gameInstance.setCommonInstance(commonInstance);

			expect(gameInstance.getCommonInstance()).toBe(commonInstance);
		});

		it('전달된 파라미터는 객체이어야 한다.', () => {
			gameInstance.setCommonInstance(commonInstance);
			const instance = gameInstance.getCommonInstance();

			expect(typeof instance).toBe('object');
		});
	});
});