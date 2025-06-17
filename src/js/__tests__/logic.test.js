import { Team, Character, ErrorRepository } from '../logic';

test('adding a new user to members', () => {
    const character = new Character({type: 'маг', power: 80});
    const team = new Team();
    team.add(character.user)
    expect(team.toArray()).toEqual([{type: 'маг', power: 80}])
});

test('addind all users to members', () => {
    const user1 = {type: 'маг', power: 80};
    const user2 = {type: 'воин', power: 100};
    const user3 = {type: 'целитель', power: 50};
    const team = new Team();
    team.addAll(user1, user2, user3)
    expect(team.toArray()).toEqual([user1, user2, user3])
})

test('testing ErrorRepository', () => {
    const map = new ErrorRepository()
    const result = map.translate(404);
    expect(result).toBe('Слишком красивый персонаж')
});

test('testing unknown error', () => {
    const map = new ErrorRepository()
    const result = map.translate(666);
    expect(result).toBe('Unknown error')
})