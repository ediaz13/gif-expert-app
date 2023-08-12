const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require('../../src/hooks/useFetchGifs');

jest.mock('../../src/hooks/useFetchGifs');
describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';
    const state = 'Is Loading...';
    
    test('Debe de mostra el loading inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading:true
        });

        render( <GifGrid category= { category }/> )
        expect( screen.getByText( state ) );
        expect( screen.getByText( category ) );
        //screen.debug();
    });

    test('Debe de mostra items cuando se cargan las imagenes useFetchGifs ', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading:false
        });

        render( <GifGrid category= { category }/> );
        expect( screen.getAllByRole('img').length ).toBe(2);    
    });

});