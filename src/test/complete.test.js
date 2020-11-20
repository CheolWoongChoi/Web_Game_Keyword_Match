
import Common from '../js/common';
import Complete from '../js/complete';

describe('Complete', () => {
	let commonInstance = null;
	let completeInstance = null;

	beforeAll(() => {
		commonInstance = new Common();
		completeInstance = new Complete();
	});

	describe('setCommonInstance', () => {
		it('complete 인스턴스 내에 common 인스턴스를 저장해야 한다.', () => {
			completeInstance.setCommonInstance(commonInstance);

			expect(completeInstance.getCommonInstance()).toBe(commonInstance);
		});

		it('전달된 파라미터는 객체이어야 한다.', () => {
			completeInstance.setCommonInstance(commonInstance);
			const instance = completeInstance.getCommonInstance();
			
			expect(typeof instance).toBe('object');
		});
	});
});