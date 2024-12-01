import { ClassNames } from './classNames';

describe('classNames', () => {
	test('with only first param', () => {
		expect(ClassNames('someClass')).toBe('someClass');
	}),
		test('with additional class', () => {
			const expected = 'someClass class1 class2';
			expect(ClassNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
		}),
		test('with mods', () => {
			const expected = 'someClass class1 class2 hovered scrollable';
			expect(
				ClassNames('someClass',
					 { hovered: true, scrollable: true },
					  ['class1','class2']
				)).toBe(expected);
		}),
		test('with mods false', () => {
			const expected = 'someClass class1 class2 hovered';
			expect(
				ClassNames('someClass',
					 { hovered: true, scrollable: false },
					  ['class1','class2']
				)).toBe(expected);
		})
});
