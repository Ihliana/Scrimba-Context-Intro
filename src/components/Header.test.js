import {screen , render} from "@testing-library/react"

import Header from './Header'


test('h1 element', () => {
    render(<Header />)

    const h1Element = screen.getByRole('heading', {
        level: 1
    })
    expect(h1Element).toBeInTheDocument()
    expect(h1Element).toHaveTextContent("Dark Theme")

})