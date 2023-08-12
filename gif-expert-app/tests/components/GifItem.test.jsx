import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas de <GiftItem /> ', () => {
    
    const title = 'Saitama';
    const url = 'https://one-punchu.com/saitama';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );

        expect( container ).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url } /> );
        
        //expect( screen.getRole('img').src ).toBe( url );
        //expect( screen.getRole('src').src ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('Debe mostrar el titulo del comoponente', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
        
        
    })
});