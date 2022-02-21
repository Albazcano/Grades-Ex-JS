const getGrade = require('..scripts/gradesTest.js');

describe('Testing Grades', ()=>{
    test('¿que nota tengo?', () => {
        expect(getGrade(8).toBe('Notable'));
    });
})
