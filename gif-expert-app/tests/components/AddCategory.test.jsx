import { fireEvent, render, screen } from '@testing-library/react';
const { AddCategory } = require('../../src/components/AddCategory');


describe('Prueba en <AddCategory />', () => {
    
    test('Debe de cambiar el valor de la caja de texto.', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target: { value: 'Saitama' } });

        expect( input.value ).toBe('Saitama');
        screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        //TODO

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: 'Saitama' } });
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('No debe de llamar onNewCategory si el input esta vacío', () => {
        
        const onNewCategory = jest.fn();
        //TODO

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');

        fireEvent.submit( form );
        //screen.debug();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
})