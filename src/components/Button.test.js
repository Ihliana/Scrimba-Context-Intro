import {screen, render} from "@testing-library/react"

import Button from './Button'


test('button displays correctly', () => {
    render(<Button />)

    const btnElement = screen.getByRole('button')
    expect(btnElement).toBeInTheDocument()
    expect(btnElement).toHaveTextContent("Switch Theme")
})