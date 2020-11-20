
import Common from '../js/common';
import Game from '../js/game';
import Complete from '../js/complete';

describe('Common', () => {
	let commonInstance = null;
	let gameInstance = null;
	let completeInstance = null;

	beforeAll(() => {
		commonInstance = new Common();
		gameInstance = new Game();
		completeInstance = new Complete();
	});

	describe('setReady', () => {
		it('common 인스턴스 내에 game 인스턴스와 complete 인스턴스를 저장해야 한다.', () => {
			commonInstance.setReady(gameInstance, completeInstance);

			expect(commonInstance.getPageInstances()).toEqual([ gameInstance, completeInstance ]);
		});

		it('전달된 파라미터는 객체이어야 한다.', () => {
			commonInstance.setReady(gameInstance, commonInstance);
			const pageInstances = commonInstance.getPageInstances();

			pageInstances.forEach(instance => {
				expect(typeof instance).toBe('object');
			});
		});
	});
});